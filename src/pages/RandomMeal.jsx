import axios from "axios";
import React, { useEffect, useState } from "react";

const RandomMeal = () => {
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    setRandomItem(res.data.meals[0]);
  };

  return (
    <div>
      {randomItem && (
        <div className="grid grid-cols-1 md:grid-cols-2  md:px-10">
          <div className="flex flex-col items-center ">
            <p className="my-5 text-2xl font-bold px-5">{randomItem.strMeal}</p>
            <img
              src={randomItem.strMealThumb}
              alt="random meal"
              className="mt-10 sm:mt-0 rounded-lg h-3/5"
            />
          </div>
          <div className="flex flex-col item-center px-8 sm:mt-10">
            <p className="sm:mt-5">{randomItem.strInstructions}</p>
            <button
              onClick={getRandom}
              className="bg-red-500 w-50 mx-auto my-5 px-3 py-2 rounded-md text-white "
            >
              Generate new meal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomMeal;
