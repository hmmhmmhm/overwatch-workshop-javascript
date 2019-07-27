/**
 * The player hit by the ray cast (or null
 * if no player is hit).
 */
export const rayCastHitPlayer = (
	/**
	 * Start POS - The start position for the ray
	 * cast. If a player is provided. A position
	 * 2 meters above the player’s feet is used.
	 * Can use most Vector based Value Syntax to
	 * provide this value.
	 * - `Type.Vector.`
	 */
	startPos: string | number | any[],
	/**
	 * End POS - The end position for the ray cast.
	 * If a player is provided. A position 2 meters
	 * above the player’s feet is used. Can use
	 * most Vector based Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	endPos: string | number | any[],
	/**
	 * Players to include - Which players can be
	 * hit by this ray cast. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Array.`
	 */
	playersToInclude: string | number | any[],
	/**
	 * Players to exclude - Which players cannot
	 * be hit by this ray cast. This list takes
	 * precedence over players to include. Can
	 * use most Player based Value Syntax to provide this value.
	 * - `Type.Array.`
	 */
	playersToExclude: string | number | any[],
	/**
	 * Include player owned objects - Whether player
	 * owned objects (such as barriers or turrets)
	 * should be included in the ray cast. Can
	 * use most Boolean based Value Syntax to provide this value.
	 * - `Type.Bool.`
	 */
	IncludePlayerOwnedObjects: string | number | any[]
): number => {

	// @ts-ignore
	return `Ray Cast Hit Player(${startPos}, ${endPos}, ${playersToInclude}, ${playersToExclude}, ${IncludePlayerOwnedObjects})`
}
