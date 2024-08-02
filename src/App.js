import React, { useState } from 'react';
import axios from 'axios';
import Dropdown from './Components/Dropdown';

const App = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedSections, setSelectedSections] = useState(['Characters', 'Numbers', 'Highest alphabet']);

  const handleChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const res = await axios.post(`process.env.BACKEND_URL/bfhl`, parsedInput); // Directly specifying the URL
      setResponse(res.data);
    } catch (error) {
      console.error('Invalid JSON or API error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#01193d] flex flex-col items-center justify-center font-poppins">
      <h1 className="text-4xl font-bold mb-4 text-white">RA2111026030177</h1>
      <textarea
        value={jsonInput}
        onChange={handleChange}
        placeholder="Enter JSON"
        className="w-80 h-40 p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-[#e74b9f] hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      {response && (
        <div className="mt-4 text-white">
          <Dropdown selectedSections={selectedSections} setSelectedSections={setSelectedSections} />
          {selectedSections.includes('Characters') && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Characters</h2>
              <ul className="list-disc pl-5">
                {response.alphabets.map((char, index) => (
                  <li key={index}>{char}</li>
                ))}
              </ul>
            </div>
          )}
          {selectedSections.includes('Numbers') && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Numbers</h2>
              <ul className="list-disc pl-5">
                {response.numbers.map((num, index) => (
                  <li key={index}>{num}</li>
                ))}
              </ul>
            </div>
          )}
          {selectedSections.includes('Highest alphabet') && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Highest alphabet</h2>
              <ul className="list-disc pl-5">
                {response.highest_alphabet.map((char, index) => (
                  <li key={index}>{char}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
