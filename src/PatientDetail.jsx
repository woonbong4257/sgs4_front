import axios from "axios";
import React, { useState } from "react";
import "./css/PatientDetail.css";

function PatientDetail() {
  /* 환자 정보를 입력할 때 useState안의 값에 접근하여 길이 판단 후  post가 가능하게 함*/
  const [patInfo, setPatinfo] = useState({
    name: "",
    tel: "",
    id: "",
  });

  function onChangeInfo(e) {
    const { value, name } = e.target;
    setPatinfo({ ...patInfo, [name]: value });
  }

  function onClickPostInfo() {
    if (
      patInfo.name.length > 1 &&
      patInfo.tel.length > 10 &&
      patInfo.id.length > 12
    ) {
      axios
        .post("http://localhost:4000/patInfo", {
          name: patInfo.name,
          tel: patInfo.tel,
          pid: patInfo.id,
        })
        .then((res) => {
          alert(res.data.msg);
        });
    } else {
      alert("입력된 정보를 다시 확인해주세요");
    }
  }

  return (
    <div className="patient-detail-container">
      <h1>환자 정보 등록</h1>
      <div className="patient-detail-form">
        <label>환자명</label>
        <input
          type="text"
          name="name"
          value={patInfo.name}
          onChange={onChangeInfo}
        />
        <label>전화번호</label>
        <input
          type="text"
          name="tel"
          value={patInfo.tel}
          onChange={onChangeInfo}
        />
        <label>주민등록번호</label>
        <input
          type="text"
          name="id"
          value={patInfo.id}
          onChange={onChangeInfo}
        />
        <button onClick={onClickPostInfo}>등록하기</button>
      </div>
    </div>
  );
}

export default PatientDetail;
