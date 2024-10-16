import React, { useEffect, useState } from "react";

const Demo2 = () => {
  const [data, setData] = useState("This is React");
  useEffect(() => {
    setTimeout(() => {
      setData("NEW DATA");
    }, 2000);
  }, []);
  return (
    <div>
      <div>
        {data === "This is React" ? <div>React js</div> : <div>React only</div>}
      </div>
    </div>
  );
};

export default Demo2;
