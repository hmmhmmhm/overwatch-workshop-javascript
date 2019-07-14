/**
 * 선택한 텍스트와 지정된 값으로 구성된 텍스트입니다.
 */
export const string = (
	/**
	 * 결과로 표시되는 텍스트입니다.
	 * 중괄호 안의 숫자는 대응값으로 교체됩니다.
	 * - `Text.` 또는 `Type.Text.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	string: string,
	/**
	 * 텍스트로 전환되어 {0}을 대체할 값입니다.
	 * - `StringParam.` 또는 `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	_0: string,
	/**
	 * 텍스트로 전환되어 {1}을 대체할 값입니다.
	 * - `StringParam.` 또는 `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	_1: string,
	/**
	 * 텍스트로 전환되어 {2}를 대체할 값입니다.
	 * - `StringParam.` 또는 `Type.StringParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	_2: string
) => {

	return `String(${string}, ${_0}, ${_1}, ${_2})`
}