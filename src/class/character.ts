import { CharacterClass } from '../interfaces/character-class';
import { SkillsStrategyProtocol } from '../interfaces/skills-strategy-protocol';
import { StatsStrategyProtocol } from '../interfaces/stats-strategy-protocol';
import { SkillsStrategy } from './strategies/skills/skills-strategy';
import { StatsStrategy } from './strategies/stats/stats-strategy';

export class Character {
  constructor(
    public name: string,
    public characterClass: CharacterClass,
  ) {}

  private _stats: StatsStrategyProtocol = new StatsStrategy();
  private _skills: SkillsStrategyProtocol = new SkillsStrategy();

  get stats(): StatsStrategyProtocol {
    return this._stats;
  }

  get skills(): SkillsStrategyProtocol {
    return this._skills;
  }

  set stats(stats: StatsStrategyProtocol) {
    this._stats = stats;
  }

  set skills(skills: SkillsStrategyProtocol) {
    this._skills = skills;
  }
}
