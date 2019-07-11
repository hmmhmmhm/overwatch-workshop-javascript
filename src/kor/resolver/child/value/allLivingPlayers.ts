import { 
	ValueTeamType,
 } from '../../../interface'

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
export const allLivingPlayers = (
	/**
	 * 플레이어가 속한 팀입니다.
	 */
	team: ValueTeamType
) => {

	return `All Living Players(${team})`
}