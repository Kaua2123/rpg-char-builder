import { CharacterBuilder } from './class/character-builder';
import { WarriorStatsStrategy } from './class/warrior-stats-strategy';

const characterBuilder = new CharacterBuilder();
const character = characterBuilder.createCharacter('Kaua', 'Warrior');
console.log(character.stats);
character.stats = new WarriorStatsStrategy();
console.log(character.stats);
