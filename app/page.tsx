'use client';

import dynamic from 'next/dynamic';

const ChartComponent = dynamic(() => import('./components/ChartComponent'), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#1f1f1f] text-white">
      <main className="flex flex-col items-center justify-center p-6 w-full max-w-5xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Weekly Forecast – ARIMA (5,1,2)
        </h1>
        <p className="text-base text-center max-w-xl mb-8">
          A rolling weekly forecast trained on Swiss energy data, based on my 2025 Bachelor thesis.
        </p>
        <div className="w-full scale-75">
          <ChartComponent />
        </div>
      </main>

      <footer className="text-sm text-gray-400 py-6 text-center w-full border-t border-gray-700 mt-10">
        <p>© 2025 Omar Abdesslem</p>
        <p className="mt-2">
          Powered by <a href="https://www.swissgrid.ch" target="_blank" className="underline hover:text-white">Swissgrid</a>, visualized with <a href="https://plotly.com/javascript/" target="_blank" className="underline hover:text-white">Plotly</a>, inspired by <a href="https://github.com/arthurgassner" target="_blank" className="underline hover:text-white">Arthur Gassner</a>.
        </p>
      </footer>
    </div>
  );
}
