import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const params = useParams();
  useEffect(() => {
    console.log("par", params);
  }, []);
  return <div>UserPage</div>;
};
