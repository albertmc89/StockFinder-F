import { Navigate, Route, Routes } from "react-router-dom";
import StockListPage from "../../pages/StockListPage/StockListPage";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/home" element={<StockListPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
