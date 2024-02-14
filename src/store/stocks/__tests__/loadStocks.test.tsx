import { stocksMock } from "../../../mocks/stocksMock";
import { StocksState } from "../../types";
import { loadStocksActionCreator, stocksReducer } from "../stocksSlice";

describe("Given a stocksReducer reducer", () => {
  describe("When it receives a load stocks action with two stocks 'Microsoft' and 'Tesla'", () => {
    test("Then it should return a new state with the two received stocks", () => {
      const currentStockState: StocksState = {
        stocks: [],
      };
      const stocks = stocksMock;

      const loadStocksAction = loadStocksActionCreator(stocks);

      const newStockState = stocksReducer(currentStockState, loadStocksAction);

      expect(newStockState).toHaveProperty("stocks", stocks);
    });
  });
});
