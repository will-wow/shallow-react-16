import React from "react";
import { shallow } from "enzyme";

import UserGreeter from "./UserGreeter";

describe("UserGreeter", () => {
  const user = { name: "alice" };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserGreeter greeting="hello" />);
  });

  it("renders nothing at first", () => {
    expect(
      wrapper
        .renderProp("children")(user)
        .find(".message")
    ).toHaveLength(0);
  });

  describe("given a click", () => {
    it.only("renders a greeting", () => {
      wrapper
        .renderProp("children")(user)
        .find("button")
        .simulate("click");

      expect(
        wrapper
          .renderProp("children")(user)
          .find("ContextConsumer")
          .renderProp("children")(user)
          .find(".message")
          .text()
      ).toBe("hello, alice, you clicked the button");
    });
  });
});

describe.skip("UserGreeter BAD TESTS", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserGreeter greeting="hello" />).renderProp("children")({
      name: "alice"
    });
  });

  it("renders nothing at first", () => {
    expect(wrapper.find(".message")).toHaveLength(0);
  });

  describe("given a click", () => {
    it("renders a greeting", () => {
      wrapper.find("button").simulate("click");

      expect(wrapper.find(".message").text()).toBe("hello, alice, you clicked the button");
    });
  });
});
