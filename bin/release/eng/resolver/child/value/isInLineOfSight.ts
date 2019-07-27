/**
 * Whether two positions have line of sight
 * with each other.
 */
export const isInLineOfSight = (
	/**
	 * Start Pos - The start position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	startPos: string | number | any[],
	/**
	 * End Pos - The end position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	endPos: string | number | any[],
	/**
	 * Barriers - Defines how barriers affect line
	 * of sight, when considering whether a barrier
	 * belongs to an enemy, the allegiance of the
	 * player provided to start pos (if any) is
	 * used. Can be set to “Barriers do not block
	 * LOS”, Enemy barriers block LOS", and “All
	 * barriers block LOS”.
	 * - `Type.Barrier.`
	 */
	barriers: string | number | any[]
) => {

	return `Is In Line Of Sight(${startPos}, ${endPos}, ${barriers})`
}