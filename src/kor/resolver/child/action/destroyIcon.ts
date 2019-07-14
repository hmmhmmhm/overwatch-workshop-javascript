/**
 * CREATE ICON에 의해 생성된
 * 아이콘 개체를 제거합니다.
 */
export const destroyIcon = (
	/**
	 * 제거할 아이콘 개체를 지정합니다.
	 * 여기에 사용되는 개체는
	 * LAST CREATED ENTITY 또는
	 * 예전에 LAST CREATED ENTITY
	 * 가 담긴 변수입니다.
	 * - `Type.Entity.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	entity: string
) => {

	return `Destroy Icon(${entity})`
}