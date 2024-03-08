import { SkillsProtocol } from '../../../interfaces/skills-protocol';
import { SkillsStrategyProtocol } from '../../../interfaces/skills-strategy-protocol';

export class SkillsStrategy extends SkillsStrategyProtocol {
  protected skills: SkillsProtocol = [
    {
      action1: 'attack',
      action2: 'defend',
      action3: 'heal',
      action4: 'parry',
      action5: 'run',
    },
  ];
}
