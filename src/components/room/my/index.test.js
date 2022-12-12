import configureStore from "redux-mock-store"; //ES6 modules
import MyRoom from "./";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { i18n } from "../../../i18n";
import { I18nextProvider } from "react-i18next";
import { act } from "react-dom/test-utils";

const middlewares = [];
const mockStore = configureStore(middlewares);

it("test create collection component", async () => {
  // Initialize mockstore with empty state
  const initialState = {
    authentication: {
      account: "0xFc39B7eEC05544f04c8601A64ad3890C6B9Ee060",
    },
  };
  const store = mockStore(initialState);

  jest.mock("react-i18next", () => ({
    useTranslation: () => ({
      t: (key) => key,
      i18n: { changeLanguage: jest.fn() },
    }),
  }));

  await act(async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <MyRoom />
          </Router>
        </Provider>
      </I18nextProvider>
    );
  });

  expect(screen.getByText("my_rooms")).toBeInTheDocument();
  expect(screen.getByText("buy_room")).toBeInTheDocument();
});
