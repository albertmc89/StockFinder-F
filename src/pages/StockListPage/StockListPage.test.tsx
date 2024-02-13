import { Provider } from "react-redux";
import { store } from "../../store";
import StockListPage from "./StockListPage";
import { render, screen } from "@testing-library/react";

describe("Given an StockListPage", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'Stocks", () => {
      const expectedText = /Stocks/i;

      render(
        <Provider store={store}>
          <StockListPage />
        </Provider>,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
