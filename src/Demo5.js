import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Demo3 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataTwo, setDataTwo] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const dataApi = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setData(response.data.slice(0, 30));
        setDataTwo(response.data.slice(0, 30));
        console.log(response.data);
      } catch (e) {
        console.log("e", e);
      }
    };
    dataApi();
  }, []);

  const handleEdit = (id, title, thumbnailUrl) => {
    navigate("/edit-title", { state: { id, title, thumbnailUrl } });
    setEditId(id);
    setEditTitle(title);
  };

  const handleSave = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, title: editTitle } : item
      )
    );
    setEditId(null);
    setEditTitle("");
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filteredData = dataTwo.filter((d) =>
      d.title.includes(event.target.value)
    );
    console.log("filteredData", filteredData);
    setData(filteredData);
  };

  return (
    <div>
      <input type="text" value={search} onChange={handleSearch} />
      <table border={2}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>
                {editId === d.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  d.title
                )}
              </td>
              <td>
                <img src={d.thumbnailUrl} alt="" />
              </td>
              <td>
                {editId === d.id ? (
                  <button onClick={() => handleSave(d.id)}>Save</button>
                ) : (
                  <button
                    onClick={() => handleEdit(d.id, d.title, d.thumbnailUrl)}
                  >
                    {" "}
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(d.id)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Demo3;
