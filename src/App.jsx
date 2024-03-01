import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState();
  const datos = async () => {
    let res = await fetch("https://randomuser.me/api/?results=30");
    res = await res.json();
    setData(res);
  };
  useEffect(() => {
    datos();
  }, []);
  console.log(data);

  return (
    <div>
      {data?.results?.map((i) => {
        return (
          <ul>
            <img src={i.picture.large} alt="" />
            <h4>
              {i.name.first} {i.name.last}
            </h4>
            <p>{i.id.name}</p>
            <p>{i.dob.age}</p>
            <p>{i.gender}</p>
            <p>{i.phone}</p>
            <p>{i.cell}</p>
            <p>{i.email}</p>
            <p>{i.registered.age}</p>
          </ul>
        );
      })}
    </div>
  );
};

export default App;


/**
 * <ul>
            <img src={i.picture.large} alt="" />
            <h4>
              {i.name.first} {i.name.last}
            </h4>
            <p>{i.id.name}</p>
            <p>{i.dob.age}</p>
            <p>{i.gender}</p>
            <p>{i.phone}</p>
            <p>{i.cell}</p>
            <p>{i.email}</p>
            <p>{i.registered.age}</p>
          </ul>
 */