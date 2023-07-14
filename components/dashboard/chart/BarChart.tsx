import { DEFAULT_STYLES } from 'styles';
import { Box } from '@chakra-ui/react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(...registerables);
ChartJS.defaults.scale.grid.display = false;

export const BarChart = () => {
  const datas = [
    { year: 2010, count: 10 },
    { year: 2011, count: 3 },
    { year: 2012, count: 5 },
    { year: 2013, count: 10 },
    { year: 2014, count: 2 },
    { year: 2015, count: 3 },
    { year: 2016, count: 8 },
  ];

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  return (
    <Box w='full' display={{ base: 'none', xl: 'block' }}>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: 'Inflow',
              data: datas.map((row) => row.count),
              backgroundColor: DEFAULT_STYLES.purple,
            },
            {
              label: 'Outflow',
              data: datas.map((row) => row.count),
              backgroundColor: DEFAULT_STYLES.pink,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
              display: false,
            },
            title: {
              display: false,
              text: 'Chart.js Bar Chart',
            },
          },
        }}
      />
    </Box>
  );
};
