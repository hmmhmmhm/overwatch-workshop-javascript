import { 
	ValueVectorType,
 } from '../../../interface'

/**
 * 두 위치 사이의 거리(미터)입니다.
 */
export const distanceBetween = (
	/**
	 * 거리 측정에 사용되는 두 위치 중 하나입니다.
	 */
	startPos: ValueVectorType,
	/**
	 * 거리 측정에 사용되는 두 위치 중 하나입니다.
	 */
	endPos: ValueVectorType
) => {

	return `Distance Between(${startPos}, ${endPos})`
}