import React, { useState, useEffect } from "react";
import "./Meal.css";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputData, setInputData] = useState(" ");

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
    };
    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();
    console.log("search data =", data.meals);
    setMealData(data.meals);
  };

  return (
    <>
      <div className="my-3 text-center">
        <button
          onClick={() => setArea("Indian")}
          type="button"
          className="btn btn-outline-primary mx-3"
        >
          Indian
        </button>
        <button
          onClick={() => setArea("Canadian")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("American")}
          type="button"
          className="btn btn-outline-success mx-3"
        >
          American
        </button>
        <button
          onClick={() => setArea("Thai")}
          type="button"
          className="btn btn-outline-danger mx-3"
        >
          Thai
        </button>
        <button
          onClick={() => setArea("British")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          British
        </button>
        <button
          onClick={() => setArea("Russian")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Russian
        </button>
      </div>
      <form onSubmit={submitHandler} className="mx-auto text-center my-4">
        <input onChange={(e) => setInputData(e.target.value)} type="text" />
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {mealData.map((data) => (
          <div key={data.idMeal} style={{ textAlign: "center" }}>
            <div>
              <img
                src={data.strMealThumb}
                alt=""
                style={{
                  width: "220px",
                  borderRadius: "10px",
                  border: "2px solid yellowgreen",
                }}
              />
            </div>
            <h3>{data.strMeal}</h3>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Meal;
