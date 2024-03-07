import { StatsProtocol } from '../interfaces/stats-protocol';
import { StatsStrategyProtocol } from '../interfaces/stats-strategy-protocol';

export class StatsStrategy extends StatsStrategyProtocol {
  protected stats: StatsProtocol = [
    { strength: 10, int: 10, vit: 10, speed: 10 },
  ];
}
