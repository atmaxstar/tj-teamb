import { useEffect, useState } from 'react';
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
  ChartOptions,
  ChartEvent,
  ActiveElement,
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
  const [clickedHeight, setClickedHeight] = useState<number>(0);
  const [clickedWeight, setClickedWeight] = useState<number>(0);

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
        label: '消費カロリー',
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
 
  const options: ChartOptions<"bar" | "line"> = {
    scales: {
      y1: {
        position: "left", // 身長の Y 軸を左側に配置
        ticks: {
          // 身長の軸の目盛りに色をつける
          callback: (value) => `${value}`,  // 数値をそのまま表示
          color: "rgb(255, 99, 132)",  // 赤色
        },
      },
      y2: {
        position: "right", // 体重の Y 軸を右側に配置
        grid: {
          drawOnChartArea: false, // 体重の Y 軸にはグリッド線を描画しない
        },
        ticks: {
          // 体重の軸の目盛りに色をつける
          callback: (value) => `${value}`,  // 数値をそのまま表示
          color: "rgb(75, 192, 192)",  // 緑色
        },
      },
    },
  };

  const handleClick = (e: ChartEvent, elements: ActiveElement[]) => {
    console.log(e)
    if (elements.length > 0) {
      const elementIndex = elements[0].index; // クリックされたデータポイントのインデックス

      // 身長と体重の値を両方同時にセット
      const clickedHeightValue = data.datasets[0].data[elementIndex]; // 身長の値
      const clickedWeightValue = data.datasets[1].data[elementIndex]; // 体重の値

      setClickedHeight(clickedHeightValue); // 身長の値を保存
      setClickedWeight(clickedWeightValue); // 体重の値を保存
    }
  };

  return (
    <div className='flex w-full flex-col'>
    <div className='flex w-full justify-center text-2xl bg-slate-200'>
      2024年6月9日
    </div>
      <WeightCalorieInfo weight={clickedWeight} cal={clickedHeight}/>
      <Chart type='bar' data={data} options={{ ...options, onClick: handleClick }}/>
      <Tab tab={tab} setTab={setTab}/>
    </div>
  )
}

export default CalorieWeightChart
