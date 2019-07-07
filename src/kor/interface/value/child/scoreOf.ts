import { ValuePlayerType } from '../../../type'

/**
 * 지정된 플레이어의 현재 점수입니다.
 * 게임 모드가 개별 전투가 아닌 경우
 * 결과값은 0이 됩니다.
 */
export interface IScoreOf {
    /**
     * 점수 정보를 가져올 플레이어입니다.
     */
    player: ValuePlayerType
}