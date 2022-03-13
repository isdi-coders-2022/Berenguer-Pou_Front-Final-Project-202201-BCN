import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import MyFavouriteTracksPage from "./";

describe("Given a AddNewTrackPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a heading", () => {
      render(
        <Provider store={store}>
          <MyFavouriteTracksPage />
        </Provider>
      );

      const myFavsHeading = screen.getByRole("heading", {
        name: /My favourite tracks/i,
      });

      expect(myFavsHeading).toBeInTheDocument();
    });
  });
});