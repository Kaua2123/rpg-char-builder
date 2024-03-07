import { CharacterClass } from '../interfaces/character-class';
import { StatsStrategyProtocol } from '../interfaces/stats-strategy-protocol';
import { StatsStrategy } from './stats-strategy';

export class Character {
  constructor(
    public name: string,
    public characterClass: CharacterClass,
  ) {}

  public strength: number = 10;
  public int: number = 10;
  public vit: number = 10;
  public speed: number = 10;

  private _stats: StatsStrategyProtocol = new StatsStrategy();

  get stats(): StatsStrategyProtocol {
    return this._stats;
  }

  set stats(stats: StatsStrategyProtocol) {
    this._stats = stats;
  }
}
