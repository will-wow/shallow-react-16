import React from "react";
import { shallow } from "enzyme";
import UserGreeting from "./UserGreeting";
import UserContext from "./UserContext";

describe("UserGreeting", () => {
  it.skip("IS GOING TO FAIL, DON'T DO THIS", () => {
    const wrapper = shallow(
      <UserContext.Provider value={{ name: "alice" }}>
        <UserGreeting greeting="hello" />
      </UserContext.Provider>
    );

    console.log(wrapper.debug());
    console.log(wrapper.dive().debug());

    expect(
      wrapper
        .dive()
        .find(".greeting")
        .text()
    ).toBe("hello, alice");
  });

  it("renders data", () => {
    const wrapper = shallow(<UserGreeting greeting="hello" />);
    expect(
      wrapper
        .renderProp("children")({ name: "alice" })
        .find(".greeting")
        .text()
    ).toBe("hello, alice");
  });
});
