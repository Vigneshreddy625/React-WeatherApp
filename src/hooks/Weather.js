import { useState, useEffect } from 'react';

function useWeatherApp() {
    const [input, setInput] = useState('');
    const [location, setLocation] = useState('');
    const [temp, setTemp] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
        setInput('')
    };
    

    const fetchWeatherData = () => {
        if (input) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=e2e4ac3a6533ab87f2366eaa5f1bd0f5`)
                .then((res) => res.json())
                .then((data) => {
                    setLocation(data.name);
                    setTemp(data.main.temp);
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error);
                });
        }
    };

   

    return {
        input,
        setInput,
        location,
        temp,
        handleSubmit
    };
}

export default useWeatherApp;
