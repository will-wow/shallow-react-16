import React from "react";
import { shallow } from "enzyme";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  let props;
  let wrapper;

  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation(f => f());

    props = {
      userId: "user-1",
      user: { id: "user-1", name: "alice" },
      loadUser: jest.fn()
    };
    wrapper = shallow(<UserProfile {...props} />);
  });

  it('loads the user', () => {
    expect(props.loadUser).toHaveBeenCalledWith('user-1');
  });

  it('watches for id changes', () => {
    expect(React.useEffect.mock.calls[0][1]).toEqual(['user-1']);
  });

  it('renders the user', () => {
    expect(wrapper.text()).toContain(['alice']);
  });
});
