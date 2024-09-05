import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { describe, it } from "node/test";

describe("Test cases for the Notifications component", () => {
  it("should render without crashing", () => {
    const component = shallow(<Notifications />);
    expect(component).toBeDefined;
  });

  it("should render 3 list items", () => {
    const component = shallow(<Notifications />);
    expect(component.find("li")).toHaveLength(3);
  });

  it("should render the required text", () => {
    const component = shallow(<Notifications />);
    expect(component.find("p")).toMatch("Here is the list of notifications");
  });
});
