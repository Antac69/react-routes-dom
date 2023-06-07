import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const User = () => {
  console.log(useParams())
  return (
    <div>
        hola como estan
    </div>
  );
};

export default User;
