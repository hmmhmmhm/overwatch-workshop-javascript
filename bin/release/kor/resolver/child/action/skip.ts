/**
 * 액션 목록에 있는
 * 지정된 수의 액션을 건너뜁니다.
 */
export const skip = (
	/**
	 * 건너뛸 액션의 수입니다.
	 * 이 액션은 제외한 개수입니다.
	 * - `Type.Number.`
	 */
	numberOfActions: string | number | any[]
) => {

	return `Skip(${numberOfActions})`
}