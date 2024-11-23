import axios from "axios";
import React, { useEffect } from "react";
axios.defaults.withCredentials = true;

function Main() {
  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => {
      console.log("user: ", res.data.user, "type: ", res.data.type);
    });
  });
  return (
    <div>
      <h1>Main</h1>
    </div>
  );
}

export default Main;
