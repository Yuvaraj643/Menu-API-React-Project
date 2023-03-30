import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './DisplayData.css'

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    
     const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const resultData = await res.json();
    console.log(resultData.categories);
    setData(resultData.categories);
  };

  useEffect(() => {
    getData();
  }, []);

  
  function handleChange(e) {
    setSearch(e.target.value)
  }

  return(
    <>
    <div className='main' >
        <div className="center">
        <input
          className="input"
          type="text"
          placeholder="   Search By Category (Chicken,Dessert,Pasta,Starter,Seafood) "
          value={search}
          onChange={handleChange}
/></div>
      <div class='row row-cols-1 row-cols-md-2 g-4'>
      {
            data
              .filter(
                (state) =>
                  !search ||
                  state.strCategory.toLowerCase().includes(search.toLowerCase())
              )
              .map((coin) => {
          return (
              <div class="col">
                <div class="card border-info mb-3 shadow p-3 mb-5">
                  <img src={coin.strCategoryThumb} class="card-img-top" alt="..." />
                  <span class="card-title">{coin.strCategory}</span>
                  <p class="card-text"><span className='confirm'>Description </span>:{coin.strCategoryDescription}</p>
                </div>
              </div>
          )
        })
      }
    </div>
    </div>
    </>

  ) ;
}

export default DisplayData;
