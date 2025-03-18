import React from "react";
import { WiDayCloudy } from "react-icons/wi";

const Morning = () => <div>Good Morning</div>;
const Afternoon = () => (
  <div>
    Good Afternoon <WiDayCloudy size={24} color="white" />
  </div>
);
const Evening = () => <div>Good Evening</div>;
const Night = () => <div>Good Night</div>;

const UserGreetings = ({ time }) => {
  return (
    (time === "morning" && <Morning />) ||
    (time === "afternoon" && <Afternoon />) ||
    (time === "evening" && <Evening />) ||
    (time === "night" && <Night />)
  );
};

export default UserGreetings;
