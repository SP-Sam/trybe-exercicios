abstract class Character {
  abstract talk(): void;

  abstract specialMovie(): void;
}

class MeleeCharacter extends Character {
  constructor(
    private name: string,
    private specialMovieName: string,
  ) {
    super();
  }

  public talk(): void {
    console.log(`Hi, I am ${this.name} and I am a Melee character`);
  }

  public specialMovie(): void {
    console.log(`${this.name} special movie: ${this.specialMovieName}`);
  }
}

class LongRangeCharacter extends Character {
  constructor(
    private name: string,
    private specialMovieName: string,
  ) {
    super();
  }

  public talk(): void {
    console.log(`Hi, I am ${this.name} and I am a Long range character`);
  }

  public specialMovie(): void {
    console.log(`${this.name} special movie: ${this.specialMovieName}`);
  }
}

function characterPresentation(character: Character) {
  character.talk();
  character.specialMovie();
}

const mario = new MeleeCharacter('Mario', 'Uppercut');
const link = new LongRangeCharacter('Link', 'Arrowhead');

characterPresentation(mario);
characterPresentation(link);