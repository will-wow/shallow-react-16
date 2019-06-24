import React from "react";
import { shallow, mount } from "enzyme";
import UserGreeting from "./UserGreeting";
import UserContext from "./UserContext";

describe("UserGreeting", () => {
  const user = { name: "alice" };
  it("mounts a greeting", () => {
    const wrapper = mount(
      <UserContext.Provider value={user}>
        <UserGreeting greeting="hello" />
      </UserContext.Provider>
    );

    expect(wrapper.find(".greeting").text()).toContain("hello, alice");
  });

  it("shallow renders a greeting with a provider", () => {
    const wrapper = shallow(
      <UserContext.Provider value={user}>
        <UserGreeting greeting="hello" />
      </UserContext.Provider>
    );

    const content = wrapper
      .dive()
      .dive()
      .dive();

    expect(content.find(".greeting").text()).toContain("hello, alice");

    expect(content.find("Logger").prop("children")).toEqual(user);
  });
});
