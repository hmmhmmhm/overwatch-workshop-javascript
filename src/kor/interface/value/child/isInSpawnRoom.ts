import { ValuePlayerType } from '../../../type'

/**
 * 지정된 플레이어가 전투준비실에 있는지
 * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
 */
export interface IIsInSpawnRoom {
    /**
     * 전투준비실 상태를 확인할 대상 플레이어입니다.
     */
    player: ValuePlayerType
}