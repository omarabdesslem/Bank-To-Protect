'use client';

import dynamic from 'next/dynamic';

const ChartComponent = dynamic(() => import('./components/ChartComponent'), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#1f1f1f] text-white px-4">
      <main className="flex flex-col items-center justify-center pt-6 w-full max-w-5xl">
        <h1 className="text-xl font-semibold mb-2 text-center">
          Swiss Energy Forecast – ARIMA(5,2,1)
        </h1>
      <div className="flex justify-center items-center text-sm mb-4">
        <p className="text-sm text-center">
          Weekly rolling forecast based on SwissGrid data from my 2025 Bachelor Work.
        </p>
      </div>
        {/* Chart */}
        <div className="w-full scale-[0.8]">
          <ChartComponent />
        </div>
      </main>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-4 mb-6 text-sm">
        {[
          'Full Time Series Analysis',
        ].map((label) => (
          <a
            key={label}
            href="Bachelor_project.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 py-1.5 px-3 rounded"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-xs text-gray-400 py-4 text-center w-full border-t border-gray-700">
        <p>© 2025 Omar Abdesslem</p>
        <p className="mt-1">
          Powered by <a href="https://www.swissgrid.ch" target="_blank" className="underline hover:text-white">Swissgrid</a>, visualized with <a href="https://plotly.com/javascript/" target="_blank" className="underline hover:text-white">Plotly</a>, inspired by <a href="https://github.com/arthurgassner" target="_blank" className="underline hover:text-white">Arthur Gassner</a>.
        </p>
      </footer>
    </div>
  );
}
