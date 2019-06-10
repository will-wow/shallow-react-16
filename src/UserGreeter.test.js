import React from "react";
import { shallow } from "enzyme";
import UserGreeter from "./UserGreeter";

describe("UserGreeter", () => {
  let wrapper;
  const inContext = (contextData = { name: "alice" }) => wrapper.renderProp("children")(contextData);

  beforeEach(() => {
    wrapper = shallow(<UserGreeter greeting="hello" />);
  });

  it("renders nothing at first", () => {
    expect(inContext().find(".message")).toHaveLength(0);
  });

  describe("given a click", () => {
    it("renders a greeting", () => {
      inContext()
        .find("button")
        .simulate("click");

      expect(
        inContext()
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
