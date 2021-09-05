import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [term, setTerm] = useState("");
  const [meals, setMeals] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMeals = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
      );
      setMeals(data.meals);
    };
    getMeals();
  }, []);

  const getMeals = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    if (data.meals === null) {
      setError(true);
    } else {
      setMeals(data.meals);
      setError(false);
    }

    setTerm("");
  };

  return (
    <div className="px-10">
      <div className="my-4 flex w-full justify-center">
        <input
          className="border-2 border-red-500 rounded px-2"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a Meal"
        />
        <button
          onClick={getMeals}
          className="bg-red-500 text-white mx-2 p-2 rounded-lg "
        >
          Search
        </button>
      </div>
      {error ? (
        <div className="text-red-500 flex  justify-center my-20  text-4xl">
          No meals found :(
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {meals &&
            meals.map((meal) => (
              <div className="flex flex-col items-center">
                <Link to={`meal/${meal.idMeal}`}>
                  <img className="rounded" src={meal.strMealThumb} alt="meal" />
                </Link>

                <span className="my-2">{meal.strMeal} </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
