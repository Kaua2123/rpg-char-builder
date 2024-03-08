import { CharacterBuilder } from './class/character-builder';

const characterBuilder = new CharacterBuilder();
const character = characterBuilder.createCharacter('Kaua', 'Warrior');
console.log(character.stats);
