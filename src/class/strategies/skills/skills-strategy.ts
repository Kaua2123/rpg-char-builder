import { SkillsProtocol } from '../../../interfaces/skills-protocol';
import { SkillsStrategyProtocol } from '../../../interfaces/skills-strategy-protocol';

export class SkillsStrategy extends SkillsStrategyProtocol {
  protected skills: SkillsProtocol = [
    {
      action1: 'Atacar: Ataca o inimigo alvo',
      action2: 'Defender: Se defende de um ataque',
      action3: 'Comer: Come um alimento e recebe buff',
      action4: 'Parry: Se defende e contra ataca',
      action5: 'Correr: Foge da batalha',
    },
  ];
}
