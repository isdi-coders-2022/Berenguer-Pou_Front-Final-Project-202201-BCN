import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import { wrapper } from "../src/redux/store";
import { GetStaticPropsContext } from "next";
import TrackItemPage, { getStaticProps } from "../src/pages/track/[id]";

describe("Given a TrackItemPage component", () => {
  describe("When it's rendered", () => {
    test("It should render a track", async () => {
      const WrappedComponent = await wrapper.withRedux(TrackItemPage);

      const context = {
        params: { id: "6239018bfb5f2c811f7ce309" },
      };

      await getStaticProps(context as GetStaticPropsContext);

      render(<WrappedComponent />);

      const expectedText = await screen.findByText(/4 summits/i);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
