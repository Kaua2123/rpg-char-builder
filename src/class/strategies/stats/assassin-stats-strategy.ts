import { StatsProtocol } from '../../../interfaces/stats-protocol';
import { StatsStrategy } from './stats-strategy';

export class AssassinStatsStrategy extends StatsStrategy {
  protected stats: StatsProtocol = [{ strength: 8, int: 8, vit: 8, speed: 15 }];
}
