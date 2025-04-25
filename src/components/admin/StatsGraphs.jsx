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
import { Card, CardContent, Typography, Grid } from '@mui/material';

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
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sales Per Day (R)
            </Typography>
            <Line data={salesChartData} options={chartOptions} height={300} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Orders Completed Per Day
            </Typography>
            <Line data={ordersChartData} options={chartOptions} height={300} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
