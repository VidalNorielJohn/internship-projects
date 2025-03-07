import {
  PI,
  getCircumference,
  getArea,
  getVolume,
} from "./modules/mathUtils.js";

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`Circumference: ${circumference}cm`);
console.log(`Area: ${area}cm^2`);
console.log(`Volume : ${volume}cm^3`);

