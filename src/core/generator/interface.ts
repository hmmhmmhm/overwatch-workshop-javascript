import FolderLogger from 'folder-logger'
import generatorData from './generator.json'

let loggerTemp = new FolderLogger('./')

export interface IData {
    /**
     * Generator Logger
     */
    Logger: typeof loggerTemp

    /**
     * Here is the grammatical name of
     * the actual overwatch workshop
     * to be used in each interface implementer.
     */
    generatorData: typeof generatorData

    /**
     * @description
     * Name of the language that the generator will generate.
     */
    lang: string

    /**
     * @description
     * The folder path where resolver will be created.
     */
    resolverPath?: string

    /**
     * @description
     * Collects the file name that type matches.
     * (Doesn't collect file extension)
     */
    preCollectedTypeFileNames: {[key: string]: any}

    /**
     * Extracted overlatch interfaces data.
     */
    interfaces?: {[key: string]: any}
}