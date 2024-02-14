import { useAppSelector } from "../../store";
import "./StockList.css";

const StockList = (): React.ReactElement => {
  const stocks = useAppSelector((state) => state.stocksState.stocks);

  return (
    <ul className="players-list">
      {stocks.map((stock) => (
        <li key={stock.id}>
          <h2>{stock.name}</h2>
        </li>
      ))}
    </ul>
  );
};

export default StockList;
