/**
 * The lesser of the two numbers. This will
 * return a numerical value of two number values compared.
 */
export const min = (
	/**
	 * Value - The left-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value1: string | number | any[],
	/**
	 * Value - The right-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Min(${value1}, ${value2})`
}
