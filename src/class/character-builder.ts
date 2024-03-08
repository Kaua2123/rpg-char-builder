import { CharacterBuilderProtocol } from '../interfaces/character-builder-protocol';
import { CharacterClass } from '../interfaces/character-class';
import { ArcherStatsStrategy } from './strategies/stats/archer-stats-strategy';
import { AssassinStatsStrategy } from './strategies/stats/assassin-stats-strategy';
import { Character } from './character';
import { MageStatsStrategy } from './strategies/stats/mage-stats-strategy';
import { TankStatsStrategy } from './strategies/stats/tank-stats-strategy';
import { WarriorStatsStrategy } from './strategies/stats/warrior-stats-strategy';
import { WarriorSkillsStrategy } from './strategies/skills/warrior-skills-strategy';
import { ArcherSkillsStrategy } from './strategies/skills/archer-skills-strategy';
import { MageSkillsStrategy } from './strategies/skills/mage-skills-strategy';
import { TankSkillsStrategy } from './strategies/skills/tank-skills-strategy';
import { AssassinSkillsStrategy } from './strategies/skills/assassin-skills-strategy';

export class CharacterBuilder implements CharacterBuilderProtocol {
  createCharacter(name: string, characterClass: CharacterClass): Character {
    const classToStrategyMap = {
      Warrior: WarriorStatsStrategy,
      Archer: ArcherStatsStrategy,
      Mage: MageStatsStrategy,
      Tank: TankStatsStrategy,
      Assassin: AssassinStatsStrategy,
    };

    const skillsToStrategyMap = {
      Warrior: WarriorSkillsStrategy,
      Archer: ArcherSkillsStrategy,
      Mage: MageSkillsStrategy,
      Tank: TankSkillsStrategy,
      Assassin: AssassinSkillsStrategy,
    };

    const character = new Character(name, characterClass);

    if (character.characterClass in classToStrategyMap) {
      character.stats = new classToStrategyMap[character.characterClass]();
      character.skills = new skillsToStrategyMap[character.characterClass]();
    }

    return character;
  }
}
