/**
 * 좌측 피연산자를 우측 피연산자만큼 제곱합니다.
 * 좌측 피연산자가 음수이면 결과는 항상 0입니다.
 */
export const raiseToPower = (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string,
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string
) => {

	return `Raise To Power(${value1}, ${value2})`
}