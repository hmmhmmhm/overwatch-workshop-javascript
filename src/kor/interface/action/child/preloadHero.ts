import { ValuePlayerType, ValueHeroType } from '../../../type'

/**
 * 지정된 플레이어의 스킨을 사용하여,
 * 지정된 영웅을 메모리에서
 * 허용하는 만큼 먼저 불러옵니다.
 * 빠르게 영웅을 바꿀 수 있으며,
 * 다음 영웅을 알고 있는 경우 유용합니다.
 */
export interface IPreloadHero {
    /**
     * 영웅을 미리 불러올 플레이어입니다.
     * 플레이어 당 한 번에 단 한 개의
     * PRELOAD HERO 액션만 활성화할 수 있습니다.
     */
    player: ValuePlayerType
    /**
     * 지정된 플레이어가 미리 불러올 영웅입니다.
     * 배열에 여러 영웅을 지정한 경우,
     * 배열 초반에 지정된 영웅일수록
     * 우선순위가 가장 높습니다.
     */
    hero: ValueHeroType
}