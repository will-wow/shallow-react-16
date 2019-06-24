import React from "react";
import { shallow } from "enzyme";
import Authors from "./Authors";

describe("UserProfile", () => {
  let props;
  let wrapper;
  let useEffect;

  let mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  const authors = [{ id: 1, name: "alice" }, { id: 2, name: "bob" }];
  const posts = [{ id: 1, title: "a post", body: "the body" }];

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    // useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

    props = {
      fetchAuthors: jest.fn().mockResolvedValue(authors),
      fetchPosts: jest.fn().mockResolvedValue(posts)
    };

    mockUseEffect();
    mockUseEffect();
    wrapper = shallow(<Authors {...props} />);
  });

  describe("on start", () => {
    it("loads the authors", () => {
      expect(props.fetchAuthors).toHaveBeenCalled();
    });

    it("does not load posts ", () => {
      expect(props.fetchPosts).not.toHaveBeenCalled();
    });

    it("renders the authors", () => {
      expect(
        wrapper
          .find("button")
          .first()
          .text()
      ).toBe("alice");
    });
  });

  describe("given a click on a user", () => {
    beforeEach(() => {
      mockUseEffect();
      mockUseEffect();

      wrapper
        .find("button")
        .first()
        .simulate("click");
    });

    it("loads the right posts", () => {
      expect(props.fetchPosts).toHaveBeenCalledWith(1);
    });

    it("renders the posts", () => {
      expect(wrapper.find(".posts").text()).toContain("the body");
    });
  });

  it("renders the user", () => {
    expect(wrapper.text()).toContain(["alice"]);
  });
});
