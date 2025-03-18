import React, { useEffect, useState } from "react";

const UseEffectExampleOne = () => {
  // console.log("Component rendered"); // Log when component renders

  // const [value, setValue] = useState(0);
  // const [value2, setValue2] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect called");
  //   console.log(`Value 1 changed to: ${value}`); // Log value changes
  //   document.title = `New Messages(${value})`;
  // }, [value]);

  // useEffect(() => {
  //   console.log(`Value 2 changed to: ${value2}`); // Log value2 changes
  // }, [value2]);

  // console.log("Render completed"); // Log before each render completes

  //////////////////////////////////////////////////////////////////////////////////////////////////////

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      // This line is crucial for updating the component's state with the fetched data:
      // 1. setData is the state updater function provided by useState hook
      // 2. It triggers a re-render of the component when called
      // 3. Updates the data state variable with the API response
      // 4. Without this line, the fetched data would not be stored in component state
      // 5. This allows the data to persist and be used elsewhere in the component
      if (data && data.length) setData(data);
      console.log(data);
    }
    // Call getData function
    getData();
  }, []); // Remove data dependency to prevent infinite loop  }, [data]);

  return (
    // <div>
    //   <p>Value 1: {value}</p>
    //   <p>Value 2: {value2}</p>
    //   <button onClick={() => setValue(value + 1)}>Increment Value 1</button>
    //   <button onClick={() => setValue2(value2 + 1)}>Increment Value 2</button>
    // </div>
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectExampleOne;
