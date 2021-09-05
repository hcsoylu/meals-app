import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailPage = () => {
  let { id } = useParams();
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const getMeal = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(data.meals[0]);
    };

    getMeal();
  }, [id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-3 my-10">
      <div className="flex flex-col items-center">
        <h2 className="mb-5 font-bold text-2xl">{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt="" className="w-80 rounded-lg" />
      </div>
      <div className="items-center mt-12 px-10 sm:px-0">
        <p className="text-base md:px-10">{meal.strInstructions}</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-5 sm:mt-0 md:mt-10">
        <svg
          style={{ height: "60px", width: "60px", color: "red" }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-youtube"
          viewBox="0 0 16 16"
        >
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
        </svg>
        <a
          href={meal.strYoutube}
          className="font-bold text-2xl mt-5 underline "
          target="_blank"
          rel="noreferrer"
        >
          Watch on Youtube!
        </a>
        <span className="mt-5">Learn how to cook...</span>
      </div>
    </div>
  );
};

export default DetailPage;
