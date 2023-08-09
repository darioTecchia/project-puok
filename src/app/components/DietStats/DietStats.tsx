import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { PeriodicCheck } from "@/models/User";

import dayjs from "dayjs";
require('dayjs/locale/it')
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
dayjs.locale('it')

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DietStats({ periodicChecks }: { periodicChecks: PeriodicCheck[] }) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const labels = periodicChecks.map(periodicCheck => dayjs(periodicCheck.date).format('lll'));

  const data = {
    labels,
    datasets: [
      {
        label: 'Circonferenza vita',
        data: periodicChecks.map(periodicCheck => periodicCheck.circumference),
        borderColor: 'rgb(255,193,7)',
        backgroundColor: 'rgba(255,193,7, 0.5)',
        tension: 0.1
      },
      {
        label: 'Massa magra',
        data: periodicChecks.map(periodicCheck => periodicCheck.leanMass),
        borderColor: 'rgb(25,135,84)',
        backgroundColor: 'rgba(25,135,84, 0.5)',
        tension: 0.1
      },
      {
        label: 'Massa grassa',
        data: periodicChecks.map(periodicCheck => periodicCheck.fatMass),
        borderColor: 'rgb(220,53,69)',
        backgroundColor: 'rgba(220,53,69, 0.5)',
        tension: 0.1
      },
      {
        label: 'Idratazione',
        data: periodicChecks.map(periodicCheck => periodicCheck.water),
        borderColor: 'rgb(13,110,253)',
        backgroundColor: 'rgba(13,110,253, 0.5)',
        tension: 0.1
      },
      {
        label: 'Peso',
        data: periodicChecks.map(periodicCheck => periodicCheck.weight),
        borderColor: 'rgb(13,202,240)',
        backgroundColor: 'rgba(13,202,240, 0.5)',
        tension: 0.1
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}