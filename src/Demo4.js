import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const renderApi = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const filterData = response.data.filter((d) => d.id % 2 === 0);
        setData(filterData);

        console.log(filterData);
      } catch (e) {
        console.log(e);
      }
    };
    renderApi();
  }, []);
  return (
    <div>
      <table border={2}>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Image</th>
        </tr>
        {data.map((d, index) => (
          <tr key={index}>
            <td>{d.id}</td>
            <td>{d.title}</td>
            <td>
              <img src={d.thumbnailUrl} alt="" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Demo4;
