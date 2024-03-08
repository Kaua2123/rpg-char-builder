import { SkillsProtocol } from '../../../interfaces/skills-protocol';
import { SkillsStrategy } from './skills-strategy';

export class TankSkillsStrategy extends SkillsStrategy {
  protected skills: SkillsProtocol = [
    {
      action1: 'Atacar: Ataca o inimigo alvo',
      action2: 'Defender: Se defende de um ataque',
      action3: 'Comer: Come um alimento e recebe buff',
      action4: 'Parry: Se defende e contra ataca',
      action5: 'Correr: Foge da batalha',
      action6:
        'Soco Cruel: Causa dano em um inimigo baseado na sua porcentagem de vida restante.',
      action7:
        'Ira Gentil: Você não é levado a sério pelo seu jeito calmo e bobo de ser, mas ao ter alguém para proteger, é capaz de tudo. Causa dano em todos os inimigos, baseado na vitalidade.',
      action8:
        '(ULTIMATE) Proteção Nobre: Com sua imensa vitalidade, é capaz de proteger a si e a todos os aliados. Cria um escudo baseado na vitalidade que dura 3 rodadas',
    },
  ];
}
