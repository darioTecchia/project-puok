import Image from "next/image";
import Link from "next/link";
import { Dish } from "@/models/Diet";

import dayjs from "dayjs";
require('dayjs/locale/it')
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
dayjs.locale('it')

export default function DishesSummary({ dishesMap }: { dishesMap: { [key: string]: Dish } }) {

  const reduceDishes = (dishes: Dish[]): Dish[] => {

    const aggregatedMap = new Map<string, number>();

    for (const item of dishes) {
      const { dish, measure } = item;
      if (aggregatedMap.has(dish)) {
        aggregatedMap.set(dish, aggregatedMap.get(dish)! + measure);
      } else {
        aggregatedMap.set(dish, measure);
      }
    }

    const aggregatedList: Dish[] = Array.from(aggregatedMap, ([dish, measure]) => ({
      dish,
      measure,
      unityOfMeasure: dishes.find(item => item.dish === dish)?.unityOfMeasure || ""
    }));

    return aggregatedList;
  }

  let dishes = reduceDishes(Object.values(dishesMap));

  return (
    <div>
      {dishes.length > 0 ?
        <ul className="list-group">
          {
            dishes.map(dish => (
              <li key={dish.dish} className="list-group-item d-flex justify-content-between align-items-center ">
                {dish.dish}
                <span className="badge text-bg-light"> {dish.measure} {dish.unityOfMeasure}</span>
              </li>
            ))
          }
        </ul>
        :
        <div>Seleziona le portate per far comparire qui la somma delle quantità.</div>
      }
    </div>
  )
}