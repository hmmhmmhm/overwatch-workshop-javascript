/**
 * 지정된 팀이 현재 수비 중인지 여부입니다.
 * 게임 모드가 점령, 호위,
 * 또는 점령/호위가 아닌 경우
 * 결과값은 FALSE입니다.
 */
export const isTeamOnDefense = (
	/**
	 * 역할을 확인할 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Is Team On Defense(${team})`
}