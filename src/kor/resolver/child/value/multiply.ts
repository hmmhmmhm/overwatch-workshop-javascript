/**
 * 두 숫자 또는 벡터의 곱입니다. 벡터에 숫자를
 * 곱하면 비율이 증감된 벡터가 도출됩니다.
 */
export const multiply = (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Multiply.` 또는 `Type.Multiply.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string,
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Multiply.` 또는 `Type.Multiply.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string
) => {

	return `Multiply(${value1}, ${value2})`
}