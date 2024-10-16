import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EditTitle = () => {
  const location = useLocation();
  console.log(location.state);
  const [titleData, setTitleData] = useState(location.state);
  return (
    <div>
      <div>{titleData.id}</div>
      <input defaultValue={titleData.title} type="text" />
      <div>{titleData.thumbnailUrl}</div>
      <button>Save</button>
    </div>
  );
};

export default EditTitle;
