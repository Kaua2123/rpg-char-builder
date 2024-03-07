import { StatsProtocol } from '../interfaces/stats-protocol';
import { Character } from './character';
import { StatsStrategy } from './stats-strategy';

// classe guerreiro vem com 5 de força a mais
export class WarriorStatsStrategy extends StatsStrategy {
  protected stats: StatsProtocol = [
    { strength: 15, int: 10, vit: 10, speed: 10 },
  ];
  getStrength(character: Character): number {
    if (character.characterClass !== 'Warrior') return character.strength;

    return character.strength + 5;
  }
}
