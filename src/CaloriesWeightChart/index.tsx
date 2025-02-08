import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import WeightCalorieInfo from './WeightCalorieInfo';
import Tab from './Tab';
import dayjs from 'dayjs';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);


const CalorieWeightChart = () => {
  const [tab, setTab] = useState<"week"|"month"|"three"|"six">("month");const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const generateLabels = (range: number) => {
      const today = dayjs();
      return Array.from({ length: range }, (_, i) =>
        today.subtract(i, "day").format("YYYY/MM/DD")
      ).reverse();
    };

    switch (tab) {
      case "week":
        setLabels(generateLabels(7));
        break;
      case "month":
        setLabels(generateLabels(30));
        break;
      case "three":
        setLabels(generateLabels(90));
        break;
      case "six":
        setLabels(generateLabels(180));
        break;
      default:
        setLabels([]);
    }
  }, [tab]);

  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: '身長',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map((_, index) => (index%1000)),
      },
      {
        type: 'bar' as const,
        label: '体重',
        backgroundColor: 'rgb(75, 192, 192)',
        data: labels.map((_, index) => (50 + index%20)),
        borderColor: 'white',
        borderWidth: 2,
      }
    ],
  };
  
  return (
    <div className='flex w-full flex-col'>
    <div className='flex w-full justify-center text-2xl bg-slate-200'>
      2024年6月9日
    </div>
      <WeightCalorieInfo/>
      <Chart type='bar' data={data} />
      <Tab tab={tab} setTab={setTab}/>
    </div>
  )
}

export default CalorieWeightChart
