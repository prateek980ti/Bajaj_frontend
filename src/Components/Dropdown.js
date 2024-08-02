import React from 'react';

const Dropdown = ({ selectedSections, setSelectedSections }) => {
  const handleSelect = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSections([...selectedSections, value]);
    } else {
      setSelectedSections(selectedSections.filter((section) => section !== value));
    }
  };

  return (
    <div className="bg-[#0a3673] p-4 rounded shadow-lg w-80 mt-4">
      <h3 className="text-lg font-semibold mb-2">Select sections to display:</h3>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Characters"
            checked={selectedSections.includes('Characters')}
            onChange={handleSelect}
            className="mr-2"
          />
          Characters
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Numbers"
            checked={selectedSections.includes('Numbers')}
            onChange={handleSelect}
            className="mr-2"
          />
          Numbers
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Highest alphabet"
            checked={selectedSections.includes('Highest alphabet')}
            onChange={handleSelect}
            className="mr-2"
          />
          Highest alphabet
        </label>
      </div>
    </div>
  );
};

export default Dropdown;
