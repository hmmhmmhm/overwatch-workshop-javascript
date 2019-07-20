/**
 * 인덱스에서 게임 자체에
 * 종속된 전역 변수 값을 수정합니다.
 */
export const modifyGlobalVariableAtIndex = (
	/**
	 * 수정할 전역 변수입니다.
	 * - `Type.IGlobal.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[],
	/**
	 * 수정할 배열의 인덱스입니다.
	 * 인덱스가 배열의 끝을 벗어난 경우,
	 * 해당 배열이 확장되며
	 * 새 요소는 0의 값을 가집니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	index: string | number | any[],
	/**
	 * 변수값의 변경 방식입니다.
	 * 일반적인 사칙연산,
	 * 그리고 값의 추가 및 제거를 위한
	 * ARRAY 연산 등의 옵션이 있습니다.
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	operation: string | number | any[],
	/**
	 * 수정에 사용되는 값입니다.
	 * 산술연산의 경우 이것은
	 * 두 피연산자 중 두 번째로,
	 * 나머지 하나는 변수의
	 * 현재 값으로 사용됩니다.
	 * 배열 연산에서는
	 * 이 값을 추가 또는 제거합니다.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Modify Global Variable At Index(${variable}, ${index}, ${operation}, ${value})`
}