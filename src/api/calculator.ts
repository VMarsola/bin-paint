import { PaintCans, WallInput } from "../types/calculatorTypes";

export const calculateArea = (input: WallInput) => {
  let totalArea = 0;
  const windowSize = 2.4;
  const doorSize = 1.52;

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    let windows = element.windows * windowSize;
    let doors = element.doors * doorSize;
    let wall = element.height * element.width;
    let area = wall - windows - doors;
    totalArea += area;
  }

  return totalArea;
};

export const calculateCans = (input: WallInput) => {
  let totalArea = calculateArea(input);
  let paintCans: PaintCans = {
    18: 0,
    3.6: 0,
    2.5: 0,
    0.5: 0,
  };

  for (let can in paintCans) {
    let numCan = Number(can);
    let areaCan = numCan * 5;
    while (totalArea >= areaCan) {
      paintCans[can] += 1;
      totalArea = totalArea - areaCan;
    }
  }

  if (totalArea) {
    const lastElement: any =
      Object.keys(paintCans)[Object.keys(paintCans).length - 1];
    paintCans[lastElement] += 1;
    totalArea = 0;
  }

  return paintCans;
};
