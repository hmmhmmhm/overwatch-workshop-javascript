/**
 * Enables or disables ability 2 for one or more players.
 */
export const setAbility2Enabled = (
	/**
	 * Player - The player or players whose access
	 * to ability 2 is affected. Expects a Boolean
	 * Value such as True, False, or Compare. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use ability 2. Can use
	 * most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled: string | number | any[]
) => {

	return `Set Ability 2 Enabled(${player}, ${enabled})`
}