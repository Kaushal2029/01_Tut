import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const EditPhoto = () => {
  const location = useLocation();
  console.log("location", location.state);
  const [photoData, setPhotoData] = useState(location.state);
  return (
    <div>
      <div>{photoData.id}</div>
      <input defaultValue={photoData.title} type="text" />
      <div>{photoData.thumbnailUrl}</div>
      <button>Save</button>
    </div>
  );
};

export default EditPhoto;
