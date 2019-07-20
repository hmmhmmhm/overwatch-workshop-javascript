/**
 * 플레이어가 주는 피해를
 * 순수 피해량 대비
 * % 비율로 설정합니다.
 */
export const setDamageDealt = (
	/**
	 * 주는 피해량을 설정할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 순수 피해량에 비례하도록
	 * 설정할 플레이어의
	 * 주는 피해량 비율입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	damageDealtPercent: string | number | any[]
) => {

	return `Set Damage Dealt(${player}, ${damageDealtPercent})`
}