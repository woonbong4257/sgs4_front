import {Route, BrowserRouter, Routes} from "react-router-dom"
import Main from "./Main";
import Login from "./Login";
import Header from "./Header";
import MyPage from "./MyPage";
import Patient from "./Patirnt";
import PatientDetail from "./PatientDetail";
import InsertClinic from "./InsertClinic";
import InsertPerscription from "./InsertPerscription";
import DetailInfo from "./DetailInfo";

/* App.js파일에서는 모든 페이지를 모아 놓는다 */
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
          <Route element={<PatientDetail/>} path="/detail"/>
          <Route element={<InsertClinic/>} path="/clinic"/>
          <Route element={<InsertPerscription/>} path="/perscription"/>
          <Route element={<DetailInfo/>} path="/detailinfo/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
