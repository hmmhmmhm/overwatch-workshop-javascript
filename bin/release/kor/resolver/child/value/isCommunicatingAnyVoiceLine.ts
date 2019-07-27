/**
 * 플레이어가 음성 대사를 사용하는지 여부입니다.
 * (음성 대사의 지속 시간은 4초로 추정)
 */
export const isCommunicatingAnyVoiceLine = (
	/**
	 * 음성 대사 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Communicating Any Voice Line(${player})`
}