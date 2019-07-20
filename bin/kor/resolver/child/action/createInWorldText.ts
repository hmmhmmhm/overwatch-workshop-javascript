/**
 * 지정된 플레이어 화면의 지정된 위치에
 * 표시할 HUD 텍스트를 생성합니다.
 * 이 텍스트는 제거하기 전까지 지속됩니다.
 * 이 텍스트를 참조하려면
 * LAST TEXT ID 값을 사용하면 됩니다.
 * 텍스트 요소가 너무 많이 생성될 경우
 * 이 액션이 실패할 수 있습니다.
 */
export const createInWorldText = (
	/**
	 * 월드 내 텍스트를 보게 될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string | number | any[],
	/**
	 * 표시할 텍스트입니다.
	 * - `Type.String.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	header: string | number | any[],
	/**
	 * 텍스트의 위치입니다.
	 * 이 값이 플레이어인 경우
	 * 해당 텍스트는 지정된
	 * 플레이어 머리 위에 표시되고,
	 * 그 이외의 경우 이 값은
	 * 월드 내의 위치로 해석됩니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[],
	/**
	 * 텍스트의 배율입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	scale: string | number | any[],
	/**
	 * 해당 텍스트가 벽을 뚫고 보일지, 아니면 가려질지 지정합니다.
	 * - `Type.Clipping.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	clipping: string | number | any[],
	/**
	 * 이 액션의 입력 정보 중 어떤 항목을
	 * 지속적으로 재확인할 것인지 지정합니다.
	 * 해당 텍스트는 입력 정보의 새로운 값을
	 * 계속 묻게 되며, 재확인한 값을 사용합니다.
	 * - `Type.InWorldTextReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Create In World Text(${visibleTo}, ${header}, ${position}, ${scale}, ${clipping}, ${reevaluation})`
}