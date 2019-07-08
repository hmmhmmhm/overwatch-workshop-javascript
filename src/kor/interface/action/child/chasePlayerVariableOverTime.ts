import {
    ValuePlayerType,
    VariableType,
    ValueNumberType,
    ValueVectorType,
    ValueReevaluationType,
} from '../../../type'

/**
 * 플레이어 변수 값을 시간의
 * 경과에 따라 점진적으로 수정합니다.
 * (플레이어 변수(PLAYER VARIABLE)는
 * 게임 자체에 종속된 변수입니다.)
 */
export interface IChasePlayerVariableOverTime {
    /**
     * 점진적으로 변수를 변경할 플레이어입니다.
     * 플레이어가 다수인 경우,
     * 각각의 변수가 독립적으로 변경됩니다.
     */
    player: ValuePlayerType
    /**
     * 점진적으로 수정할 플레이어의 변수를 지정합니다.
     */
    variable: VariableType
    /**
     * 플레이어 변수가 궁극적으로 도달할 값입니다.
     * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
     * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
     */
    destination: ValueNumberType | ValueVectorType
    /**
     * 해당 변수값이 목표치에
     * 도달하기까지의 시간(초)입니다.
     */
    duration: ValueNumberType
    /**
     * 이 액션의 입력 정보 중 어떤 항목을
     * 지속적으로 재확인할 것인지 지정합니다.
     * 해당 액션은 입력 정보의 새로운 값을
     * 계속 묻게 되며, 재확인한 값을 사용합니다.
     */
    reevaluation: ValueReevaluationType
}