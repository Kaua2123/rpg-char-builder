import { Character } from '../class/character';
import { CharacterClass } from './character-class';

export interface CharacterBuilderProtocol {
  createCharacter(name: string, characterClass: CharacterClass): Character;
}
