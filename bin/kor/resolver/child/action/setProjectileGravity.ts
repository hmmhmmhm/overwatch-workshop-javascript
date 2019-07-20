/**
 * 플레이어의 투사체 중력을
 * 일반 투사체 중력의
 * 지정된 비율로 설정합니다.
 */
export const setProjectileGravity = (
	/**
	 * 투사체 중력을
	 * 설정할 플레이어입니다
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * 일반 투사체 중력에
	 * 비례하도록 설정할
	 * 플레이어의 개인
	 * 투사체 중력 비율입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	projectileGravityPercent: string | number | any[]
) => {

	return `Set Projectile Gravity(${player}, ${projectileGravityPercent})`
}