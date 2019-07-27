/**
 * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
 * (흔히 ATAN2 로 불림)
 */
export const arctangentInRadians = (
	/**
	 * 함수의 분자 입력 정보입니다.
	 * - `Type.Number.`
	 */
	numerator: string | number | any[],
	/**
	 * 함수의 분모 입력 정보입니다.
	 * - `Type.Number.`
	 */
	denominator: string | number | any[]
): number => {

	// @ts-ignore
	return `Arctangent In Radians(${numerator}, ${denominator})`
}
