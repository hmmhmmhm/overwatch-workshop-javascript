/**
 * 팀 또는 경기 내에서 화물 확보 또는
 * 점령 중인 모든 플레이어가 있는 배열입니다.
 */
export const allPlayersOnObjective = (
	/**
	 * 플레이어가 속한 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `All Players On Objective(${team})`
}

