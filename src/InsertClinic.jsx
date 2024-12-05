import axios from "axios";
import React, { useState } from "react";

function InsertClinic() {
  const [clinicInfo, setClinicInfo] = useState({
    name: "",
    dis: "",
    info: "",
  });

  function onClickClinic() {
    if (clinicInfo.info.length > 2 && clinicInfo.dis.length > 1) {
      axios
        .post("http://localhost:4000/clinic", {
          name: clinicInfo.name,
          dis: clinicInfo.dis,
          info: clinicInfo.info,
        })
        .then((res) => {
          alert(res.data.msg);
        });
    } else {
      alert("진료내용을 확인해주세요");
    }
  }

  function onChangeClinic(e) {
    const { value, name } = e.target;
    setClinicInfo({ ...clinicInfo, [name]: value });
  }

  return (
    <div>
      <h1>진료 등록</h1>
      <label htmlFor="">환자 주민번호</label>
      <input
        type="text"
        name="name"
        value={clinicInfo.name}
        onChange={onChangeClinic}
      />
      <label htmlFor="">병명</label>
      <input
        type="text"
        name="dis"
        value={clinicInfo.dis}
        onChange={onChangeClinic}
      />
      <label htmlFor="">진료내용</label>
      <input
        type="text"
        name="info"
        value={clinicInfo.info}
        onChange={onChangeClinic}
      />
      <button onClick={onClickClinic}>등록하기</button>
    </div>
  );
}

export default InsertClinic;
