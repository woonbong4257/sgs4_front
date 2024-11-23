import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();

  function onClickLogOut() {
    axios.post("http://localhost:4000/logout").then((res) => {
      alert("로그아웃 완료");
    });
  }
  return (
    <div>
      <span
        onClick={() => {
          nav("/");
        }}
      >
        메인
      </span>
      <span
        onClick={() => {
          nav("/login");
        }}
      >
        로그인
      </span>
      <span onClick={onClickLogOut}>로그아웃 </span>
      <span onClick={() => nav("/mypage")}>마이페이지 </span>
      <span onClick={() => nav("/patient")}>환자정보조회 </span>
      <span>5 </span>
    </div>
  );
}

export default Header;
