import { pi } from "../digits/pi.js";
import { euler } from "../digits/euler.js";
import { ratio } from "../digits/ratio.js";

export const descriptions = {
  pi: "Pi (π) is the ratio of a circle's circumference to its diameter, ≈3.14159.",
  euler:
    "Euler's number (e), ≈2.71828, is the base of natural logarithms and used in calculus.",
  ratio:
    "The Golden Ratio (φ), ≈1.61803, appears in nature, art, and geometry as a pleasing proportion.",
};

export const digits = {
  pi: pi,
  euler: euler,
  ratio: ratio,
};
