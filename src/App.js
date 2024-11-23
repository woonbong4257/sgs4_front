import {Route, BrowserRouter, Routes} from "react-router-dom"
import Main from "./Main";
import Login from "./Login";
import Header from "./Header";
import MyPage from "./MyPage";
import Patient from "./Patirnt";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<MyPage/>} path="/mypage"/>
          <Route element={<Patient/>} path="/patient"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
