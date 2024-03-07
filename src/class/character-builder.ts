import { CharacterBuilderProtocol } from '../interfaces/character-builder-protocol';
import { CharacterClass } from '../interfaces/character-class';
import { Character } from './character';

export class CharacterBuilder implements CharacterBuilderProtocol {
  createCharacter(name: string, characterClass: CharacterClass): Character {
    const character = new Character(name, characterClass);
    return character;
  }
}
