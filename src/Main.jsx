import axios from "axios";
import React, { useState, useEffect } from "react";
import "./css/Main.css";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Main() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((res) => {
        if (res.data.user) {
          setUserData(res.data);
        } else {
          setUserData(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching user data: ", err);
        setUserData(null);
      });
  }, []);

  if (userData === null) {
    return (
      <div className="loading">
        <h2>미 로그인 상태입니다.</h2>
        <button onClick={() => navigate("/login")}>로그인 페이지로 가기</button>
      </div>
    );
  }

  return (
    <div className="main">
      <h1>환자 관리 시스템에 오신 것을 환영합니다!</h1>{" "}
      {/* 환자 관리 시스템 문구 추가 */}
      <div className="data-section">
        <div className="data-item">User: {userData.user}</div>
        <div className="data-item">Type: {userData.type}</div>
      </div>
    </div>
  );
}

export default Main;
