import React, { useState, useEffect } from "react";

const FetchedDataComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchedDataComponent;
