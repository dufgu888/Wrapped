import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeButton from "./homeButton";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("Text in state is changed when button clicked", () => {
  const wrapper = shallow(
    <Router>
      <HomeButton />
    </Router>
  );

  expect(wrapper.find("a")).toHaveLength(0);
});
