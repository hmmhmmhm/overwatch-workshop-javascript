/**
 * 전역 변수 값을 시간이 지남에
 * 따라 점진적으로 수정합니다.
 * (전역 변수(GLOBAL VARIABLE)는
 * 게임 자체에 종속된 변수입니다.)
 */
export const chaseGlobalVariableOverTime = (
	/**
	 * 점진적으로 수정할 전역 변수를 지정합니다.
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string,
	/**
	 * 전역 변수가 궁극적으로 도달할 값입니다.
	 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
	 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
	 * - `Type.DestinationParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	destination: string,
	/**
	 * 해당 변수값이 목표치에
	 * 도달하기까지의 시간(초)입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	duration: string,
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 액션은 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.Reevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string
) => {

	return `Chase Global Variable Over Time(${variable}, ${destination}, ${duration}, ${reevaluation})`
}