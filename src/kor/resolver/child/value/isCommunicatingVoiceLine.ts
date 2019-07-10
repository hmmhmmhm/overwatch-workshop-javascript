import { IIsCommunicatingVoiceLine } from '../../../interface'

/**
 * 플레이어가 음성 대사를 사용하는지 여부입니다.
 * (음성 대사의 지속 시간은 4초로 추정)
 */
export const isCommunicatingVoiceLine = (value: IIsCommunicatingVoiceLine) => {
	return `Is Communicating Voice Line(${value['player']})`
}