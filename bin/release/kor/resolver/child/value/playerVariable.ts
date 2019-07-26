/**
 * 지정된 플레이어가 가진 플레이어 변수의 현재 값입니다.
 */
export const playerVariable = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Player Variable(${player}, ${variable})`
}

