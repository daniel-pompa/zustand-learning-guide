export interface Bear {
  id: number;
  name: string;
  type: BearType;
}

export type BearType = 'black' | 'polar' | 'panda';
