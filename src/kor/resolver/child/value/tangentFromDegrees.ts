import { 
	ValueNumberType,
 } from '../../../interface'

/**
 * 지정된 각(단위: 도)의 탄젠트 값입니다.
 */
export const tangentFromDegrees = (
	/**
	 * 각(단위: 도)입니다.
	 */
	angle: ValueNumberType
) => {

	return `Tangent From Degrees(${angle})`
}