import axios from "axios";
import React, { useState } from "react";

function InsertPerscription() {
  /* 
useState를 객체로 사용함
객체로 사용하게 되면 onChange리스너를 함수형태로 빼서 사용하는 사람들은 하나의 함수로 여러 input태그에 사용 가능
*/
  const [persInfo, setPersInfo] = useState({
    pers: "",
    name: "",
  });

  function onChangePers(e) {
    const { value, name } = e.target;
    setPersInfo({ ...persInfo, [name]: value });
  }

  function onClickPers() {
    axios.post("http://localhost:4000/pers", {
      pers: persInfo.pers,
      name: persInfo.name,
    });
  }

  return (
    <div>
      <h1>치료 등록</h1>
      <label htmlFor="">치료명</label>
      <input
        type="text"
        name="pers"
        value={persInfo.pers}
        onChange={onChangePers}
      />
      <label htmlFor="">환자 주민번호</label>
      <input
        type="text"
        name="name"
        value={persInfo.dis}
        onChange={onChangePers}
      />
      <button onClick={onClickPers}>등록하기</button>
    </div>
  );
}

export default InsertPerscription;
