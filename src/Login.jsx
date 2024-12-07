import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";

function Login() {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  function onChangeLogin(e) {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  function onClickLogin() {
    if (userInfo.id && userInfo.pw) {
      axios
        .post("http://localhost:4000/login", { info: userInfo })
        .then((res) => {
          alert(res.data.msg);
          nav("/");
          window.location.reload();
          /*로그인시 새로고침이 없으면 세션이 저장되었지만 불러와지지 않는 문제 발생 => window.location.reload()로 해결*/
        });
    } else {
      alert("정보가 입력되지 않았습니다.");
    }
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>로그인</h1>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={userInfo.id}
          onChange={onChangeLogin}
        />
        <input
          type="password"
          name="pw"
          placeholder="비밀번호"
          value={userInfo.pw}
          onChange={onChangeLogin}
        />
        <button onClick={onClickLogin}>로그인</button>
      </div>
    </div>
  );
}

export default Login;
