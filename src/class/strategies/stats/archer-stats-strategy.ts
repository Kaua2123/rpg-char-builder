import { StatsProtocol } from '../../../interfaces/stats-protocol';
import { StatsStrategy } from './stats-strategy';

export class ArcherStatsStrategy extends StatsStrategy {
  protected stats: StatsProtocol = [{ strength: 6, int: 5, vit: 8, speed: 12 }];
}
