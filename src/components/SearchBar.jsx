import { useState, useEffect } from "react";
import Select from "react-select";

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      const response = await fetch(
        "https://medprobe-auth-default-rtdb.firebaseio.com/.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch options");
      }
      const data = await response.json();
      const options = Object.keys(data).map((key) => ({
        value: key,
        label: data[key].name,
        ...data[key],
      }));
      setOptions(options);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        className="m-4"
        value={selectedOption}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onChange={handleChange}
        options={options}
      />
      {selectedOption && (
        <div>
          <h2>{selectedOption.label}</h2>
          <div className="bg-white rounded-lg shadow-md p-4 m-4 ">
          <div className="text-gray-800 text-lg  "><h1 className="text-2xl font-bold text-medium-blue">Definition:</h1> {selectedOption.definition}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 m-4">
          <div className="text-gray-800 text-lg "><h1 className="text-2xl font-bold text-medium-blue"> Causes:</h1> {selectedOption.causes}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 m-4">
          <div className="text-gray-800 text-lg "><h1 className="text-2xl font-bold text-medium-blue">Diagnosis:</h1> {selectedOption.diagnosis}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 m-4">
          <div className="text-gray-800 text-lg "><h1 className="text-2xl font-bold text-medium-blue">Management:</h1> {selectedOption.management}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 m-4">
          <div className="text-gray-800 text-lg "><h1 className="text-2xl font-bold text-medium-blue">Prevention:</h1> {selectedOption.prevention}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 m-4">
          <div className="text-gray-800 text-lg "><h1 className="text-2xl font-bold text-medium-blue">Prognosis:</h1> {selectedOption.prognosis}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 m-4">
          <div className="text-gray-800 text-lg "><h1 className="text-2xl font-bold text-medium-blue">Symptoms:</h1> {selectedOption.symptoms}</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 m-4">
          <div className="text-gray-800 text-lg "><h1 className="text-2xl font-bold text-medium-blue">Treatment:</h1> {selectedOption.treatment}</div>
          </div>


          {/* Render the images if available */}
          <div className="w-4/5">
            {selectedOption.images && selectedOption.images.length > 0 ? (
              selectedOption.images.map((imageUrl, index) => (
                <img
                  src={imageUrl}
                  className="m-4  "
                  alt={`Image ${index + 1}`}
                  key={index}
                />
              ))
            ) : (
              <>
                {" "}
                <div className="bg-white rounded-lg shadow-md p-4 m-4">
                  <p className="text-gray-800 text-lg font-bold">
                    No Images Available.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
