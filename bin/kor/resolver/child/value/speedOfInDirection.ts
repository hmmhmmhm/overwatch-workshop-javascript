/**
 * 지정된 방향에서 플레이어의
 * 현재 속도(초당 미터)입니다.
 */
export const speedOfInDirection = (
	/**
	 * 속도 정보를 가져올 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 플레이어의 속도를 측정할 이동 방향입니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string
) => {

	return `Speed Of In Direction(${player}, ${direction})`
}