import { SkillsProtocol } from '../../../interfaces/skills-protocol';
import { SkillsStrategy } from './skills-strategy';

export class MageSkillsStrategy extends SkillsStrategy {
  protected skills: SkillsProtocol = [
    {
      action1: 'Atacar: Ataca o inimigo alvo',
      action2: 'Defender: Se defende de um ataque',
      action3: 'Comer: Come um alimento e recebe buff',
      action4: 'Parry: Se defende e contra ataca',
      action5: 'Correr: Foge da batalha',
      action6:
        'Necromancia: Há quem tema os mortos, mas aqueles que se aliam à eles, desfrutam de um imenso poder. Usa os inimigos caídos como aliados',
      action7:
        'Sopro Elétrico: Você é capaz de combinar os elementos ao seu bel prazer. Causa dano em todos os inimigos, os deixando eletrocutados.',
      action8:
        '(ULTIMATE) Impacto de Júpiter: Aqueles que se opõem aos seus poderes devem ser punidos. Invoca um imenso corpo celeste, causando dano em todos os inimigos.',
    },
  ];
}
