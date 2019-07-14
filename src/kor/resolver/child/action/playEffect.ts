/**
 * 월드의 한 위치에 효과를 발생시킵니다.
 * 이 효과는 갱신되거나 제거할 필요 없도록
 * 짧게 유지되었다가 사라집니다.
 */
export const playEffect = (
	/**
	 * 해당 효과를 보게 될 플레이어입니다.
	 * - `PlayersParam.` 또는 `Type.PlayersParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	visibleTo: string,
	/**
	 * 생성할 효과의 유형입니다.
	 * - `Play.` 또는 `Type.Play.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	type: string,
	/**
	 * 생성될 효과의 색상입니다.
	 * 특정 팀을 선택한 경우,
	 * 해당 팀이 보는 사람에게
	 * 적인지 여부에 따라
	 * 빨강 또는 파랑으로
	 * 효과 색상이 설정됩니다.
	 * - `Color.` 또는 `Type.Color.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	color: string,
	/**
	 * 효과의 위치입니다.
	 * 이 값이 플레이어인 경우
	 * 해당 효과는 플레이어
	 * 위치에서 발생하고,
	 * 그 이외의 경우 이 값은
	 * 월드 좌표로서 해석됩니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string,
	/**
	 * 효과 반경(미터)입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	radius: string
) => {

	return `Play Effect(${visibleTo}, ${type}, ${color}, ${position}, ${radius})`
}