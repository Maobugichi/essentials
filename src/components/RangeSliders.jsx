
function RangeSlider({setMaxValue,setMinValue, minValue, maxValue }) {
  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < max) {
      setMaxValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > min) {
      setMinValue(value);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full h-1 bg-gray-200 rounded-md relative">
        <input
          type="range"
          min="0"
          max="1000"
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-1 bg-transparent appearance-none z-10"
          style={{ zIndex: 2 }}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-1 bg-transparent appearance-none z-10"
          style={{ zIndex: 2 }}
        />
        
      </div>
    </div>
  );
}

export default RangeSlider;

