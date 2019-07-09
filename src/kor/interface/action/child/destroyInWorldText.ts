import { ValueTextId } from '../../../type'

/**
 * CREATE IN-WORD TEXT에 의해
 * 생성된 월드 내 텍스트를 제거합니다.
 */
export interface IDestroyInWorldText {
    /**
     * 제거할 월드 내 텍스트를 지정합니다.
     * 여기에 사용되는 ID는
     * LAST TEXT ID 또는 예전에
     * LAST TEXT ID가 담긴 변수입니다.
     */
    textId: ValueTextId
}