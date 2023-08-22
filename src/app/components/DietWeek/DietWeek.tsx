import { DietWeek } from '@/models/Diet';
import { concatIDs } from '@/app/utils';

const DAY_MAP: string[] = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']

import "./DietWeek.scss"

export default function DietWeek({ data, weekIndex, selectDish }: { data: DietWeek, weekIndex: number, selectDish: any }) {

  return (
    <main id='DietWeek' className='table-responsive'>
      <table className='table table-bordered table-striped mb-0'>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" className='table-success'>Colazione</th>
            <th scope="col">Spuntino</th>
            <th scope="col" className='table-info'>Pranzo</th>
            <th scope="col">Spuntino</th>
            <th scope="col" className='table-danger'>Cena</th>
          </tr>
        </thead>
        <tbody>
          {
            data.days.map((day, dayIndex) => (
              <tr key={concatIDs(weekIndex, dayIndex)}>
                <th scope="row" className='align-middle text-center'>
                  {DAY_MAP[dayIndex]}
                </th>
                {
                  day.meals.map((meal, mealIndex) => (
                    <td key={concatIDs(weekIndex, dayIndex, mealIndex)} className='align-middle text-center'>
                      <div className="container">
                        <div className="row g-2">
                          {
                            meal.dishes.map((dish, dishIndex) => (
                              <div key={concatIDs(weekIndex, dayIndex, mealIndex, dishIndex)} className='col-12'>
                                <input onChange={selectDish} value={JSON.stringify(dish)} type="checkbox" className="btn-check" id={concatIDs(weekIndex, dayIndex, mealIndex, dishIndex)} autoComplete="off" />
                                <label className="btn bg-dark-subtle" htmlFor={concatIDs(weekIndex, dayIndex, mealIndex, dishIndex)}>
                                  {dish.dish}<br />({dish.measure} {dish.unityOfMeasure})
                                </label>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
}