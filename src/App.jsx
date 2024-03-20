import { useState } from 'react'

import WeatherBox from './components/WeatherBox'


function App() {

  return (
    <>
      <div className="bg-[#221f5d] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Weather App</h1>
                    <div className="mb-4">
                        <WeatherBox/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default App
