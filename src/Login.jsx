import { useState } from "react";
import axios from "axios";

function Login() {
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
        });
    } else {
      alert("정보가 입력되지 않았습니다.");
    }
  }
  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        name="id"
        value={userInfo.id}
        onChange={onChangeLogin}
      />
      <input
        type="password"
        name="pw"
        value={userInfo.pw}
        onChange={onChangeLogin}
      />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}

export default Login;
