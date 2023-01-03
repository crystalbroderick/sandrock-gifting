export interface ICharacter {
  id: number;
  name: string;
  imgUrl: string;
  love: Array<IPreferences>;
  like: Array<IPreferences>;
}

export interface IPreferences {
  name: string;
  points: number;
  imgUrl?: string;
}
