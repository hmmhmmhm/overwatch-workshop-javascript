import {
    ValuePlayerType
} from '../../../type'

/**
 * Whether a player is using any communication
 * type (such as emoting, using a voice line, etc.)
 */
export interface IIsCommunicatingAny {
    /**
     * Player - The player whose communication
     * status to check. Can use most player based
     * Value Syntax to retrieve this value.
     */
    player: ValuePlayerType
}