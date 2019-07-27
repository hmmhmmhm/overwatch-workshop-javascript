/**
 * Sets the text at the top center of the screen
 * that normally describes the objective to
 * a message visible to specific players.
 */
export const setObjectiveDescription = (
	/**
	 * Visible to - One or more players who will
	 * see the message. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	visibleTo: string | number | any[],
	/**
	 * Header - The message to be displayed. Can
	 * use most String based Value Syntax to specify.
	 * - `Type.String.`
	 */
	header: string | number | any[],
	/**
	 * Reevaluation - Specifies which of this action’s
	 * inputs will be continously reevaluated.
	 * The message will keep asking for and using
	 * new values from reevaluated inputs. Can
	 * choose “Visible to and String” or “String”
	 * - `Type.ObjectiveDescriptionReevaluation.`
	 */
	reevaluation: string | number | any[]
) => {

	return `Set Objective Description(${visibleTo}, ${header}, ${reevaluation})`
}