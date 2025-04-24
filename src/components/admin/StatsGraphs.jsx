// components/admin/StatsGraphs.jsx
'use client';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function StatsGraphs() {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  // Placeholder empty data
  const salesChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3'],
    datasets: [
      {
        label: 'Sales (R)',
        data: [0, 0, 0],
        borderColor: '#6366F1',
        backgroundColor: '#6366F1',
      },
    ],
  };

  const ordersChartData = {
    labels: ['Day 1', 'Day 2', 'Day 3'],
    datasets: [
      {
        label: 'Orders Completed',
        data: [0, 0, 0],
        borderColor: '#10B981',
        backgroundColor: '#10B981',
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Sales Per Day (R)</h2>
        <Line data={salesChartData} options={chartOptions} height={300} />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Orders Completed Per Day</h2>
        <Line data={ordersChartData} options={chartOptions} height={300} />
      </div>
    </div>
  );
}
