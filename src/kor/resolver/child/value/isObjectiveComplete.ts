import { 
	ValueNumberType,
 } from '../../../interface'

/**
 * 지정된 목표가 완료되었는지 여부입니다.
 * 게임 모드가 점령, 호위 또는
 * 점령/호위가 아닌 경우
 * 결과값은 FALSE입니다.
 */
export const isObjectiveComplete = (
	/**
	 * 고려해야 하는 목표의 인덱스로서,
	 * 0에서 시작하여 증가합니다.
	 * 각 거점, 화물 경유지,
	 * 화물 목적지에는
	 * 각기 고유의 인덱스가 있습니다.
	 */
	number: ValueNumberType
) => {

	return `Is Objective Complete(${number})`
}