import { SkillsProtocol } from '../../../interfaces/skills-protocol';
import { SkillsStrategy } from './skills-strategy';

export class ArcherSkillsStrategy extends SkillsStrategy {
  protected skills: SkillsProtocol = [
    {
      action1: 'Atacar: Ataca o inimigo alvo',
      action2: 'Defender: Se defende de um ataque',
      action3: 'Comer: Come um alimento e recebe buff',
      action4: 'Parry: Se defende e contra ataca',
      action5: 'Correr: Foge da batalha',
      action6:
        'Arco da Discórdia: Por 3 rodadas, você dispara duas flechas com 20% a mais de dano',
      action7:
        'Envenenamento: Aplica veneno nas flechas, que reduz a força e velocidade dos inimigos',
      action8:
        '(ULTIMATE) Balestra Célere: Com sua balestra, os tiros são capazes de acertar todos os alvos por 3 rodadas.',
    },
  ];
}
