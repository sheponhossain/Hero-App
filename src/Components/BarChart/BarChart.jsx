import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from 'recharts';

const BarCharts = ({ isAnimationActive = true, cardLocation }) => {
  // Directly use ratings array from location
  const chartData = cardLocation?.state?.ratings || [];

  return (
    <BarChart
      style={{
        width: '100%',
        maxWidth: '700px',
        maxHeight: '70vh',
        aspectRatio: 1.618,
      }}
      data={chartData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" /> {/* "1 star", "2 star"... */}
      <YAxis width="auto" /> {/* auto scale */}
      <Tooltip />
      <Legend />
      <Bar
        dataKey="count"
        fill="#FF8811"
        isAnimationActive={isAnimationActive}
      />
    </BarChart>
  );
};

export default BarCharts;
