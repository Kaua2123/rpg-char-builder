import { SkillsProtocol } from '../../../interfaces/skills-protocol';
import { SkillsStrategy } from './skills-strategy';

export class WarriorSkillsStrategy extends SkillsStrategy {
  protected skills: SkillsProtocol = [
    {
      action1: 'Atacar: Ataca o inimigo alvo',
      action2: 'Defender: Se defende de um ataque',
      action3: 'Comer: Come um alimento e recebe buff',
      action4: 'Parry: Se defende e contra ataca',
      action5: 'Correr: Foge da batalha',
      action6:
        'Escudo do Rei: Assume uma postura de defesa. Por 3 rodads, você levará menos dano, mas também causará menos.',
      action7: 'Empalar: Ataque com a espada estendida, causando sangramento',
      action8:
        '(ULTIMATE) Ira Divina: Com sua forma celeste, taxa e dano crítico são aumentados por 3 rodadas',
    },
  ];
}
