/**
 * 지정한 최대값 이하, 최소값 이상
 * 범위 내에서 무작위 정수값입니다.
 */
export const randomInteger = (
	/**
	 * 허용된 최소 정수입니다.
	 * 이 입력 정보에 실수가 주어진 경우,
	 * 가장 근접한 정수로 반올림됩니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	min: string,
	/**
	 * 허용된 최대 정수입니다.
	 * 이 입력 정보에 실수가 주어진 경우,
	 * 가장 근접한 정수로 반올림됩니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	max: string
) => {

	return `Random Integer(${min}, ${max})`
}