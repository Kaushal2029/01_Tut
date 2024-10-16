import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    if (location.state) {
      setData(location.state);
      console.log(location.state);
    }
  }, [location]);

  return (
    <div>
      {data && <div>First Name : {data.formData.fname}</div>}
      {data && <div>Last Name : {data.formData.lname}</div>}
      {data && <div>Nick Name : {data.formData.nName}</div>}
    </div>
  );
};

export default Home;
