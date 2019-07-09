import {
    ValuePlayerType
} from '../../../type'

/**
 * 플레이어가 공중에 있는 상태인지 여부입니다.
 */
export interface IIsInAir {
    /**
     * 공중에 있는 상태인지를 확인할 대상 플레이어입니다.
     */
    player: ValuePlayerType
}