import { Sequence } from 'async-sequencer'
import { IData } from './interface'
import * as Util from './util'

import reformerData from './reformerData.json'
import rimraf from 'rimraf'
import fs from 'fs'

/**
 * @description
 * Overwatch Workshop
 * Advanced Scripting Engine
 * Common Grammar Re-former
 */
export default () => {
    return Sequence(async ({resolve, reject, data: preData})=>{
        
        // Generator Data
        let data: IData = preData
        let { Logger } = data

        // Sequence Logic
        Logger.debug(`Entering Reform Generator...`)

        // Check overwatch interfaces data is exist
        if(!data.interfaces || data.interfaces == undefined){
            reject()
            return
        }
        
        // Create child resolver folder
        data.reformerPath = `${process.cwd()}/src/${data.lang}/reformer/child/`
        try{ rimraf.sync(data.reformerPath) } catch(e){}
        try{ fs.mkdirSync(data.reformerPath) } catch(e){
            reject()
            return
        }

        //const resolverPath = `${process.cwd()}/src/${data.lang}/interface/value/child/`
        for(let interfaceType of Object.keys(reformerData)){
            let interfaceTypePascalCase = Util.camelCaseToPascalCase(interfaceType, false, false)
            let reformCode = ``

            reformCode += `import { Type, Value } from '../../resolver'\n\n`

            reformCode += `class ${interfaceTypePascalCase} {\n`
            reformCode += `\tpublic ${interfaceType}: string\n\n`

            reformCode += `\t/**\n`
            reformCode += `\t * @param ${interfaceType} \`Type.${interfaceTypePascalCase}.\` 를 입력하면\n`
            reformCode += `\t *   여기서 사용 가능한 함수를 확인할 수 있습니다.\n`
            reformCode += `\t */\n`
            reformCode += `\tconstructor(${interfaceType}: string){\n\t\tthis.${interfaceType} = ${interfaceType}\n\t}\n`

            for(let dependent of reformerData[interfaceType]['dependent']){
                let interfaceName = `I${Util.camelCaseToPascalCase(dependent, false, false)}`

                // Function Description
                try{
                    if(data.interfaces[interfaceName].description){
                        reformCode += `\n\t/**\n`
                        for(let description of data.interfaces[interfaceName].description.split('\n'))
                            reformCode += `\t * ${description}\n`
                        reformCode += `\t */\n`
                    }
                }catch(e){}

                // Function Properties Check
                let isPropertiesExist = false
                let isAdditionalPropertiesExist = false
                try{
                    isPropertiesExist =
                        data.interfaces[interfaceName].properties
                        && Object.keys(data.interfaces[interfaceName].properties).length != 0

                    let actualPropertiesCount = Object.keys(data.interfaces[interfaceName].properties).length
                    for(let propertieName of Object.keys(data.interfaces[interfaceName].properties))
                        if(propertieName == interfaceType) actualPropertiesCount--

                    isAdditionalPropertiesExist =
                        data.interfaces[interfaceName].properties
                        && actualPropertiesCount > 0
                }catch(e){}

                // Function Define
                reformCode += `\t${dependent}(${isAdditionalPropertiesExist? '\n' : ''}`

                // Collect Function Linking Data
                let functionParamLinkingCodes: string[] = []

                // Function Properties
                if(isPropertiesExist){
                    let propertiesCodes: string[] = []
                    for(let propertieName of Object.keys(data.interfaces[interfaceName].properties)){

                        // Except Default Param
                        if(propertieName == interfaceType){

                            // Collect Function Linking Data
                            functionParamLinkingCodes.push(`this.${interfaceType}`)
                            continue
                        }

                        // Function Properties Description
                        let propertiesCode = ``
                        if(data.interfaces[interfaceName].properties[propertieName].description){
                            propertiesCode += `\t\t/**\n`
                            for(let description of data.interfaces[interfaceName].properties[propertieName].description.split('\n'))
                                propertiesCode += `\t\t * ${description}\n`

                            // Function Properties Type Description
                            if(typeof data.interfaces[interfaceName].properties[propertieName]['$ref'] != 'undefined'){
                                let notUniqueInterface = data.interfaces[interfaceName].properties[propertieName]
                                let propertieTypeName = String(notUniqueInterface.$ref).split('#/definitions/')[1]
    
                                /**
                                 * Convert Type Name `ValueArrayType` To `Array`
                                 */
                                propertieTypeName = Util.pureTypeNameExtractor(propertieTypeName)
                                propertiesCode += `\t\t * - \`Type.${propertieTypeName}.\` 를 입력하면 \n`
                                propertiesCode += `\t\t *   여기서 사용 가능한 함수를 확인할 수 있습니다.\n`
                            }
                            propertiesCode += `\t\t */\n`
                        }

                        // Function Properties Define
                        propertiesCode += `\t\t${propertieName}: string`
                        propertiesCodes.push(propertiesCode)

                        // Collect Function Linking Data
                        functionParamLinkingCodes.push(propertieName)
                    }

                    reformCode += propertiesCodes.join(`,\n`)
                }
                reformCode += `${isAdditionalPropertiesExist? '\n\t' : ''}){\n`

                // Function Linking
                reformCode += `\t\treturn Value.${dependent}(${functionParamLinkingCodes.join(', ')})\n`
                reformCode += `\t}\n`
            }

            reformCode += `}\n\nexport default ${interfaceTypePascalCase}`
            fs.writeFileSync(`${data.reformerPath}/${interfaceType.toLowerCase()}.ts`, reformCode)
        }

        resolve()
    })
}