export type Wall = {
  width: number;
  height: number;
  doors: number;
  windows: number;
};

export type WallInput = Wall[];

export type PaintCans = {
  [size: number]: number;
};
