export const playerVariable = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string
) => {

	return `Player Variable(${player}, ${variable})`
}