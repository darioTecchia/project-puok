import { Diet } from "./Diet";

export interface PeriodicCheck {
  date: Date;
  weight: number;
  circumference: number;
  leanMass: number;
  fatMass: number;
  water: number;
}

export interface User {
  id: string;
  email: string;
  password: string;
  isDoctor: boolean;
  periodicChecks: PeriodicCheck[];
  diets: Diet[];
}