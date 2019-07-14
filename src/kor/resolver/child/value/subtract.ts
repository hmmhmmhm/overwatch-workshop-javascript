/**
 * 두 숫자 또는 벡터의 차이입니다.
 */
export const subtract = (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Subtract.` 또는 `Type.Subtract.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string,
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Subtract.` 또는 `Type.Subtract.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string
) => {

	return `Substract(${value1}, ${value2})`
}