import React from "react";
import { shallow } from "enzyme";

import UserContext from "./UserContext";
import UserGreeter from "./UserGreeter";

describe("UserGreeter", () => {
  const user = { name: "alice" };
  let wrapper;
  // const inContext = (contextData = { name: "alice" }) => wrapper.renderProp("children")(contextData);
  const inContext = () =>
    wrapper
      .find("")
      .dive()
      .dive();

  beforeEach(() => {
    wrapper = shallow(
      <UserContext.Provider value={user}>
        <UserGreeter greeting="hello" />
      </UserContext.Provider>
    );
    console.log(wrapper.dive().debug());
  });

  it("renders nothing at first", () => {
    expect(inContext().find(".message")).toHaveLength(0);
  });

  describe("given a click", () => {
    it.only("renders a greeting", () => {
      const content = inContext();
      console.log("before", content.debug());
      content.find("button").simulate("click");
      console.log("after", content.debug());
      console.log(
        "after dive",
        wrapper
          .dive()
          .dive()
          .debug()
      );

      expect(content.find(".message").text()).toBe("hello, alice, you clicked the button");
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
