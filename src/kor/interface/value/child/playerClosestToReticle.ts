import {
    ValuePlayerType,
    ValueTeamType,
} from '../../../type'

/**
 * 지정된 플레이어의 조준선에서
 * 가장 가까운 플레이어입니다.
 * 팀으로 제한할 수 있습니다.
 */
export interface IPlayerClosestToReticle {
    /**
     * 이 플레이어의 조준선으로부터
     * 가장 가까운 플레이어를 검색합니다.
     */
    player: ValuePlayerType
    /**
     * 가장 가까운 플레이어를 검색할 팀입니다.
     */
    team: ValueTeamType
}