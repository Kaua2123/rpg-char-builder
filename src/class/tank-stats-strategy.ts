import { StatsProtocol } from '../interfaces/stats-protocol';
import { StatsStrategy } from './stats-strategy';

export class TankStatsStrategy extends StatsStrategy {
  protected stats: StatsProtocol = [
    { strength: 10, int: 5, vit: 20, speed: 5 },
  ];
}
