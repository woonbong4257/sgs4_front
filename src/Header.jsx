import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState("");
  const [type, setType] = useState("");

  /* 백엔드에 저장된 세션을 헤더에 적용하여 의사와 간호사 기능에 제한을 둠 */
  /* type에 담긴 값을 토대로 분류 가능 */

  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => {
      setUserInfo(res.data.user);
      setType(res.data.type);
    });
  }, []);
  console.log(type);

  function onClickLogOut() {
    axios.post("http://localhost:4000/logout").then((res) => {
      alert(res.data.msg);
      nav("/");
      window.location.reload();
    });
  }

  function onClickLogin() {
    if (!userInfo) {
      nav("/login");
    } else {
      alert("이미 로그인 되어 있습니다.");
    }
  }

  function onClickMyPage() {
    if (userInfo) {
      nav("/mypage");
    } else {
      alert("로그인이 필요합니다.");
      nav("/login");
    }
  }

  function onClickSearch() {
    if (userInfo) {
      nav("/patient");
    } else {
      alert("로그인이 필요합니다.");
      nav("/login");
    }
  }
  function onClickClin() {
    if (userInfo) {
      if (type === "doctor") {
        nav("/clinic");
      } else {
        alert("의사만 사용가능한 서비스입니다.");
        nav("/");
      }
    } else {
      alert("로그인이 필요합니다.");
      nav("/login");
    }
  }

  function onClickPers() {
    if (userInfo) {
      if (type === "doctor") {
        alert("간호사만 사용가능한 서비스입니다.");
        nav("/");
      } else {
        nav("/perscription");
      }
    } else {
      alert("로그인이 필요합니다.");
      nav("/login");
    }
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
      <span onClick={onClickLogin}>로그인 </span>
      <span onClick={onClickLogOut}>로그아웃 </span>
      <span onClick={onClickMyPage}>마이페이지 </span>
      <span onClick={onClickSearch}>환자정보조회 </span>
      <span onClick={onClickClin}>진료 등록 </span>
      <span onClick={onClickPers}>치료 등록 </span>
    </div>
  );
}

export default Header;
