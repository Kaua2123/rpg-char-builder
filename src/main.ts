import { CharacterBuilder } from './class/character-builder';

const characterBuilder = new CharacterBuilder();
const character = characterBuilder.createCharacter('Kaua', 'Archer');
console.log(character.stats);
console.log(character.skills);
