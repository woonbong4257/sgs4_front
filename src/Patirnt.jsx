import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Patient() {
  const nav = useNavigate();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/patinfo").then((res) => {
      const data = res.data;
      setInfo(data);
    });
  }, []);

  /* 불러온 환자 정보를 테이블 형태로 출력 */
  return (
    <div>
      <h1>환자정보조회</h1>
      <button onClick={() => nav("/detail")}>환자 등록 하기</button>
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>주민번호</th>
          </tr>
        </thead>
        <tbody>
          {info.map((pat, index) => (
            <tr key={index}>
              <td onClick={() => nav(`/detailinfo/${pat.patient}`)}>
                {pat.name}
              </td>
              <td>{pat.telnum}</td>
              <td>{pat.patient}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patient;
