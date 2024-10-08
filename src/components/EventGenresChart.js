import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useState, useEffect } from 'react';

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    return data;
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const screenWidth = window.innerWidth;
    const offsetMultiplier = screenWidth < 430 ? 1.02 : 1.12;

    const x = cx + radius * Math.cos(-midAngle * RADIAN) * offsetMultiplier;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * offsetMultiplier;

    return percent ? (
      <text
        x={x}
        y={y}
        fill="#a42f15"
        fontSize={screenWidth < 430 ? '11px' : '14px'}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const colors = ['#b40303', '#771010', '#aa5454', '#e0a1a1', '#ffd4d4'];

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} text={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
