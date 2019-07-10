import { IPlayerCarryingFlag } from '../../../interface'

/**
 * 깃발 뺏기에서 지정된 팀의 깃발을 지닌 플레이어입니다.
 * 아무도 깃발을 가지지 않은 경우 결과값은 NULL입니다.
 */
export const playerCarryingFlag = (value: IPlayerCarryingFlag) => {
	return `Player Carrying Flag(${value['team']})`
}