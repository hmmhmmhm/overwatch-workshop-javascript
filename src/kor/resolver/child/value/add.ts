import { 
	IGlobalVariable,
	IPlayerVariable,
	IAltitudeOf,
	INumber,
	IAdd,
	IAngleDifference,
	IAngleBetweenVectors,
	ICountOf,
	IAcrossineInDegrees,
	IArccosineInRadians,
	IArcsineInDegrees,
	IArcsineInRadians,
	IArctangentInDegrees,
	IArctangentInRadians,
	ICosineFromDegrees,
	ICosineFromRadians,
	IControlModeScoringPercentage,
	IDistanceBetween,
	IDivide,
	IEventDamage,
	IEyePosition,
	IHealth,
	IHorizontalAngleFromDirection,
	IHorizontalAngleTowards,
	IHorizontalFacingAngleOf,
	IHorizontalSpeedOf,
	IIndexOfArrayValue,
	ILastDamageModificationId,
	ILastDamageOverTimeId,
	ILastHealOverTimeId,
	ILastTextId,
	IMatchRound,
	IMax,
	IMaxHealth,
	IMin,
	IModulo,
	INormalizedHealth,
	INumberOfDeadPlayers,
	INumberOfDeaths,
	INumberOfEliminations,
	INumberOfFinalBlows,
	INumberOfHeroes,
	INumberOfLivingPlayers,
	INumberOfPlayers,
	INumberOfPlayersOnObjective,
	IObjectiveIndex,
	IPayloadProgressPercentage,
	IPointCapturePercentage,
	IRaiseToPower,
	IRandomInteger,
	IRandomReal,
	IRoundToInteger,
	IScoreOf,
	ISineFromDegrees,
	ISineFromRadians,
	ISlotOf,
	ISpeedOf,
	ISpeedOfInDirection,
	ISquareRoot,
	ISubstract,
	ITangentFromDegrees,
	ITangentFromRadians,
	ITeamScore,
	IUltimateChargePercent,
	IVerticalAngleFromDirection,
	IVerticalAngleTowards,
	IVerticalFacingAngleOf,
	IVerticalSpeedOf,
	IBackward,
	ICrossProduct,
	IDirectionFromAngles,
	IDirectionTowards,
	IDotProduct,
	IDown,
	IFacingDirectionOf,
	IFlagPosition,
	IForward,
	ILeft,
	ILocalVectorOf,
	INearestWalkablePostion,
	INormalize,
	IObjectivePosition,
	IPayloadPosition,
	IPositionOf,
	IRayCastHitNormal,
	IRayCastHitPlayer,
	IRayCastHitPosition,
	IRight,
	IThrottleOf,
	ITotalTimeElapsed,
	IUp,
	IVector,
	IVectorTowards,
	IVelocityOf,
	IWorldVectorOf,
	IXComponentOf,
	IYComponentOf,
	IZComponentOf,
 } from '../../../interface'

/**
 * 두 숫자 또는 벡터의 합입니다.
 */
export const add = (
	/**
	 * 좌측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.
	 */
	value1: IGlobalVariable | IPlayerVariable | IAltitudeOf | INumber | IAdd | IAngleDifference | IAngleBetweenVectors | ICountOf | IAcrossineInDegrees | IArccosineInRadians | IArcsineInDegrees | IArcsineInRadians | IArctangentInDegrees | IArctangentInRadians | ICosineFromDegrees | ICosineFromRadians | IControlModeScoringPercentage | IDistanceBetween | IDivide | IEventDamage | IEyePosition | IHealth | IHorizontalAngleFromDirection | IHorizontalAngleTowards | IHorizontalFacingAngleOf | IHorizontalSpeedOf | IIndexOfArrayValue | ILastDamageModificationId | ILastDamageOverTimeId | ILastHealOverTimeId | ILastTextId | IMatchRound | IMax | IMaxHealth | IMin | IModulo | INormalizedHealth | INumberOfDeadPlayers | INumberOfDeaths | INumberOfEliminations | INumberOfFinalBlows | INumberOfHeroes | INumberOfLivingPlayers | INumberOfPlayers | INumberOfPlayersOnObjective | IObjectiveIndex | IPayloadProgressPercentage | IPointCapturePercentage | IRaiseToPower | IRandomInteger | IRandomReal | IRoundToInteger | IScoreOf | ISineFromDegrees | ISineFromRadians | ISlotOf | ISpeedOf | ISpeedOfInDirection | ISquareRoot | ISubstract | ITangentFromDegrees | ITangentFromRadians | ITeamScore | IUltimateChargePercent | IVerticalAngleFromDirection | IVerticalAngleTowards | IVerticalFacingAngleOf | IVerticalSpeedOf | IBackward | ICrossProduct | IDirectionFromAngles | IDirectionTowards | IDotProduct | IDown | IFacingDirectionOf | IFlagPosition | IForward | ILeft | ILocalVectorOf | INearestWalkablePostion | INormalize | IObjectivePosition | IPayloadPosition | IPositionOf | IRayCastHitNormal | IRayCastHitPlayer | IRayCastHitPosition | IRight | IThrottleOf | ITotalTimeElapsed | IUp | IVector | IVectorTowards | IVelocityOf | IWorldVectorOf | IXComponentOf | IYComponentOf | IZComponentOf,
	/**
	 * 우측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.
	 */
	value2: IGlobalVariable | IPlayerVariable | IAltitudeOf | INumber | IAdd | IAngleDifference | IAngleBetweenVectors | ICountOf | IAcrossineInDegrees | IArccosineInRadians | IArcsineInDegrees | IArcsineInRadians | IArctangentInDegrees | IArctangentInRadians | ICosineFromDegrees | ICosineFromRadians | IControlModeScoringPercentage | IDistanceBetween | IDivide | IEventDamage | IEyePosition | IHealth | IHorizontalAngleFromDirection | IHorizontalAngleTowards | IHorizontalFacingAngleOf | IHorizontalSpeedOf | IIndexOfArrayValue | ILastDamageModificationId | ILastDamageOverTimeId | ILastHealOverTimeId | ILastTextId | IMatchRound | IMax | IMaxHealth | IMin | IModulo | INormalizedHealth | INumberOfDeadPlayers | INumberOfDeaths | INumberOfEliminations | INumberOfFinalBlows | INumberOfHeroes | INumberOfLivingPlayers | INumberOfPlayers | INumberOfPlayersOnObjective | IObjectiveIndex | IPayloadProgressPercentage | IPointCapturePercentage | IRaiseToPower | IRandomInteger | IRandomReal | IRoundToInteger | IScoreOf | ISineFromDegrees | ISineFromRadians | ISlotOf | ISpeedOf | ISpeedOfInDirection | ISquareRoot | ISubstract | ITangentFromDegrees | ITangentFromRadians | ITeamScore | IUltimateChargePercent | IVerticalAngleFromDirection | IVerticalAngleTowards | IVerticalFacingAngleOf | IVerticalSpeedOf | IBackward | ICrossProduct | IDirectionFromAngles | IDirectionTowards | IDotProduct | IDown | IFacingDirectionOf | IFlagPosition | IForward | ILeft | ILocalVectorOf | INearestWalkablePostion | INormalize | IObjectivePosition | IPayloadPosition | IPositionOf | IRayCastHitNormal | IRayCastHitPlayer | IRayCastHitPosition | IRight | IThrottleOf | ITotalTimeElapsed | IUp | IVector | IVectorTowards | IVelocityOf | IWorldVectorOf | IXComponentOf | IYComponentOf | IZComponentOf
) => {

	return `Add(${value1}, ${value2})`
}