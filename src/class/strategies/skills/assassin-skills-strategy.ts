import { SkillsProtocol } from '../../../interfaces/skills-protocol';
import { SkillsStrategy } from './skills-strategy';

export class AssassinSkillsStrategy extends SkillsStrategy {
  protected skills: SkillsProtocol = [
    {
      action1: 'Atacar: Ataca o inimigo alvo',
      action2: 'Defender: Se defende de um ataque',
      action3: 'Comer: Come um alimento e recebe buff',
      action4: 'Parry: Se defende e contra ataca',
      action5: 'Correr: Foge da batalha',
      action6:
        'Rugir de Facas: De frente ao verdadeiro desespero, tudo o que seus inimigos conseguem escutar é o som de suas adagas. Causa MEDO nos inimigos, reduzindo sua força e inteligência.',
      action7:
        'Caçada Sangrenta: Sua imensa brutalidade o faz confundir seus inimigos com meros animais. É hora de caçar. Velocidade e Força aumentadas por 3 rodadas',
      action8:
        '(ULTIMATE) Sem Misericórdia: No luar sombrio e solitário, aqueles que notam sua presença não vêem o dia de amanhã. Chuva de cortes em todos os inimigos',
    },
  ];
}
