import axios from "axios";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategory(data.categories);
    };
    getCategories();
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-10 mt-20 px-5">
      {category &&
        category.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <img src={item.strCategoryThumb} alt="" />
            <span className="mt-5 font-semibold">{item.strCategory}</span>
          </div>
        ))}
    </div>
  );
};

export default Categories;
