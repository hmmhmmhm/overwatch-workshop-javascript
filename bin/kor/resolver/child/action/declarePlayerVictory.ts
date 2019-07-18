/**
 * 지정된 플레이어를 승자로 하여 경기를 즉시 종료합니다.
 * 이 액션은 개별 전투 모드에서만 효과가 있습니다.
 */
export const declarePlayerVictory = (
	/**
	 * 이긴 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Declare Player Victory(${player})`
}