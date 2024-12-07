import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/DetailInfo.css";

function DetailInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  /*진단과 처방에 대한 변수 선언 */
  const [diagnoses, setDiagnoses] = useState({});
  const [prescriptions, setPrescriptions] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/detinfo/" + id)
      .then((res) => {
        const { clinic, pres, name } = res.data;

        /* 진료 데이터를 날짜별로 묶음*/
        const groupedDiagnoses = clinic.reduce((acc, record) => {
          const date = record.clinic_date.split(" ")[0];
          if (!acc[date]) acc[date] = [];
          acc[date].push(record);
          return acc;
        }, {});

        /* 처방 데이터를 날짜별로 묶음*/
        const groupedPrescriptions = pres.reduce((acc, record) => {
          const date = record.pers_date.split(" ")[0];
          if (!acc[date]) acc[date] = [];
          acc[date].push(record);
          return acc;
        }, {});

        /*만들어 둔 useState에 할당 */
        setInfo({ name });
        setDiagnoses(groupedDiagnoses);
        setPrescriptions(groupedPrescriptions);
      })
      .catch((err) => {
        console.error("Error fetching detail info: ", err);
      });
  }, [id]);

  /* 데이터를 비동기로 불어오기때문에 데이터가 없다면 로딩중 출력*/
  if (!info) return <div>로딩중</div>;

  return (
    <div className="detail-info-container">
      <h1>{info.name}님의 정보</h1>
      <h2>진단 정보</h2>
      {Object.keys(diagnoses).map((date) => (
        <div key={date}>
          <h3>{date}</h3>
          <ul>
            {diagnoses[date].map((record, index) => (
              <li key={index}>
                <strong>진단명:</strong> {record.disease} <br />
                <strong>설명:</strong> {record.info} <br />
                <strong>의사 ID:</strong> {record.doctor_doctor_id}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2>처방 정보</h2>
      {Object.keys(prescriptions).map((date) => (
        <div key={date}>
          <h3>{date}</h3>
          <ul>
            {prescriptions[date].map((record, index) => (
              <li key={index}>
                <strong>처방 이름:</strong> {record.pers_name} <br />
                <strong>간호사 ID:</strong> {record.nurse_nurse_id}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DetailInfo;
