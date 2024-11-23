import axios from "axios";
import React, { useEffect, useState } from "react";

function MyPage() {
  const [info, setInfo] = useState(null); // 초기값을 null로 설정

  useEffect(() => {
    axios
      .get("http://localhost:4000/mypage")
      .then((res) => {
        console.log(res.data);
        setInfo(res.data); // 서버에서 받은 데이터를 상태로 설정
      })
      .catch((err) => {
        console.error("Error fetching mypage data:", err);
      });
  }, []);

  if (!info) {
    // 데이터를 불러오기 전 로딩 상태 처리
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>마이페이지</h1>
      <div>
        <div>이름: {info.name}</div>
        <div>직급: {info.type === "의사" ? "의사" : "간호사"}</div>
        <div>부서: {info.dep}</div>
        <div>위치: {info.loc}</div>
        {info.type === "의사" && (
          <div>
            <div>담당 간호사들:</div>
            <ul>
              {info.nur.map((nurse, index) => (
                <li key={index}>{nurse.name}</li>
              ))}
            </ul>
          </div>
        )}
        {info.type === "간호사" && (
          <div>
            <div>담당 의사: {info.doc}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPage;
