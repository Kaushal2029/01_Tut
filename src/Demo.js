import React, { useState } from "react";

const Demo = (props) => {
  const [margin, setMargin] = useState(50);
  const [backgroundColor, setbackgroundColor] = useState("red");
  // const [Name, setName] = useState("");
  // const [Salary, setSalary] = useState("");
  const [Data, setData] = useState({ Name: "", Salary: "", Date: "" });
  const handleEnter = () => {
    const a = prompt("Enter Your Name");
    const b = prompt("Enter Your Salary");
    const c = prompt("Enter Your DOB");
    setData({
      Name: a,
      Salary: b,
      Date: c,
    });
  };
  const handleCLickEvent = () => {
    if (margin == 50 && backgroundColor == "red") {
      setMargin(100);
      setbackgroundColor("blue");
    } else {
      setMargin(50);
      setbackgroundColor("red");
    }
  };
  const { data } = props;
  return (
    <div>
      <p style={{ marginTop: `${margin}px` }}>Hello buddy</p>
      <div style={{ backgroundColor: `${backgroundColor}` }}>{data.name}</div>
      <div>{data.description}</div>
      <button onClick={handleCLickEvent}>Button</button>
      <table border={2} align="center" style={{ marginTop: "20px" }}>
        <tr>
          <th>Name</th>
          <th>Salary</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>{Data.Name}</td>
          <td>{Data.Salary}</td>
          <td>{Data.Date}</td>
         
        </tr>
      </table>
      <button onClick={handleEnter}>Enter</button>
    </div>
  );
};

export default Demo;
