import { CharacterBuilderProtocol } from '../interfaces/character-builder-protocol';
import { CharacterClass } from '../interfaces/character-class';
import { ArcherStatsStrategy } from './archer-stats-strategy';
import { AssassinStatsStrategy } from './assassin-stats-strategy';
import { Character } from './character';
import { MageStatsStrategy } from './mage-stats-strategy';
import { TankStatsStrategy } from './tank-stats-strategy';
import { WarriorStatsStrategy } from './warrior-stats-strategy';

export class CharacterBuilder implements CharacterBuilderProtocol {
  createCharacter(name: string, characterClass: CharacterClass): Character {
    const classToStrategyMap = {
      Warrior: WarriorStatsStrategy,
      Archer: ArcherStatsStrategy,
      Mage: MageStatsStrategy,
      Tank: TankStatsStrategy,
      Assassin: AssassinStatsStrategy,
    };

    const character = new Character(name, characterClass);

    if (character.characterClass in classToStrategyMap) {
      character.stats = new classToStrategyMap[character.characterClass]();
    }

    return character;
  }
}
