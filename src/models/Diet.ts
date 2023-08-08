export interface Dish {
  dish: string;
  measure: number;
  unityOfMeasure: string;
}

export interface Meal {
  dishes: Dish[]
}

export interface DietDay {
  meals: Meal[];
  cheatDay: boolean;
}

export interface DietWeek {
  days: [DietDay, DietDay, DietDay, DietDay, DietDay, DietDay, DietDay];
}

export interface Diet {
  isArchived: boolean;
  weeks: DietWeek[];
}