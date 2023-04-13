import { PaintCans, Wall } from "../types/calculatorTypes";

export type IContextProps = {
  children: React.ReactNode;
};

export type UniId = {
  uniqueiD: string;
};
export type WallItem = Wall & UniId;

export type IStepType = {
  stepIndex: number;
  data: WallItem[];
  response: PaintCans;
};
