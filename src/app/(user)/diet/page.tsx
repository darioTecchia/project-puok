"use client";

import DietWeek from '@/app/components/DietWeek/DietWeek';
import { Diet, Dish } from '@/models/Diet';
import { EXAMPLE_DIET } from '@/models/example';
import { useState } from 'react';

import './diet.scss';
import DishesSummary from '@/app/components/DishesSummary/DishesSummary';

const DIET: Diet = EXAMPLE_DIET;

export default function Diet() {

  const [selectedDishesMap, setSelectedDishesMap] = useState({} as { [key: string]: Dish });

  const selectDish = (event: any): void => {
    let key: string = event.target.id
    let value: Dish = JSON.parse(event.target.value);
    if (selectedDishesMap[key]) {
      delete selectedDishesMap[key];
    } else {
      selectedDishesMap[key] = value;
    }
    setSelectedDishesMap({ ...selectedDishesMap })
  }

  return (
    <main id='diet' className='py-4'>
      <div className='container'>
        <div className='mb-4'>
          <h1 className='display-1'>Benvenuto, Dario!</h1>
          All&apos;interno di questa pagina troverai la tua dieta personalizzata suddivisa per settimana e l&apos;avanzamento della cura.
          <br />
          Clicca sui piatti della dieta per visualizzare un sunto delle pietanze e le quantità totali.
        </div>

        <div className="card mb-4">
          <div className="card-header">
            Dieta
          </div>
          {
            DIET.weeks.map((week, index) =>
            (
              <div className='card-body' key={index}>
                <h5 className="card-title sticky-top">Settimana {index + 1}</h5>
                <div className="card-text">
                  <DietWeek data={week} weekIndex={index} selectDish={selectDish} />
                </div>
              </div>
            ))
          }
        </div>

        <div className="card">
          <div className="card-header">
            Riassunto
          </div>
          <div className="card-body">
            <div className="card-text">
              <DishesSummary dishesMap={selectedDishesMap} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}