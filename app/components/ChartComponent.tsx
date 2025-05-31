'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-plotly.js with SSR disabled
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const ChartComponent = () => {
  const [figure, setFigure] = useState<{ data: any[]; layout: any } | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setFigure(json))
      .catch((err) => console.error('Error loading chart data:', err));
  }, []);

  if (!figure) return <div>Loading chart...</div>;

  return (
    <Plot
      data={figure.data}
      layout={figure.layout}
      config={{ responsive: true }}
      style={{ width: '100%', height: '100%' }}
      useResizeHandler
    />
  );
};

export default ChartComponent;
