import { CharacterClass } from '../interfaces/character-class';

export class Character {
  constructor(
    private name: string,
    private characterClass: CharacterClass,
    public strength: number = 10,
    public int: number = 10,
    public vit: number = 10,
    public speed: number = 10,
  ) {}
}
