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

  const alice = { id: 1, name: "alice" };
  const bob = { id: 2, name: "bob" };
  const authors = [alice, bob];
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

    it("does not load posts", () => {
      expect(props.fetchPosts).not.toHaveBeenCalled();
    });

    it("renders the authors", () => {
      expect(wrapper.find("Author")).toHaveLength(2);

      const firstAuthor = wrapper.find("Author").first();

      expect(firstAuthor.prop("author")).toEqual(alice);
      expect(firstAuthor.prop("activeAuthor")).toEqual(null);
    });
  });

  describe("given selected author", () => {
    beforeEach(() => {
      mockUseEffect();
      mockUseEffect();

      wrapper
        .find("Author")
        .first()
        .simulate("select", alice);
    });

    it("sets the active author", () => {
      expect(wrapper.find("Author")).toHaveLength(2);

      const firstAuthor = wrapper.find("Author").first();

      expect(firstAuthor.prop("author")).toEqual(alice);
      expect(firstAuthor.prop("activeAuthor")).toEqual(alice);
    });

    it("loads the right posts", () => {
      expect(props.fetchPosts).toHaveBeenCalledWith(alice.id);
    });

    it("renders the posts", () => {
      expect(wrapper.find("Post").prop("post")).toEqual(posts[0]);
    });
  });
});
