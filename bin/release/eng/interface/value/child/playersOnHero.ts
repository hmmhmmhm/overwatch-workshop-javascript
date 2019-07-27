import { ValueTeamType, ValueHeroType } from '../../../type'

/**
 * The array of players playing a specific
 * hero on a team or in the match.
 */
export interface IPlayersOnHero {
    /**
     * Hero - The hero to check for play. Can use
     * most Hero based Value Syntax to provide this value.
     */
    hero: ValueHeroType
    /**
     * Team - The team or teams on which to check
     * for the hero being played. Can use most
     * Team based Value Syntax to provide this value.
     */
    team: ValueTeamType
}