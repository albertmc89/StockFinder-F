import StockListPage from "../../pages/StockListPage/StockListPage";
import Header from "../Header/Header";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <main className="container">
        <StockListPage />
      </main>
    </>
  );
};

export default App;
