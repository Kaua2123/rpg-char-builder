import { StatsProtocol } from '../interfaces/stats-protocol';
import { StatsStrategy } from './stats-strategy';

export class MageStatsStrategy extends StatsStrategy {
  protected stats: StatsProtocol = [
    { strength: 5, int: 15, vit: 5, speed: 10 },
  ];
}
