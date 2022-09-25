import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

const wrapper = shallow(<Notifications />);

describe("<Notifications />", () => {
    it("renders without crashing", () => {
      expect(wrapper.exists()).toEqual(true);
    });
    it("renders three list items", () => {
      wrapper.update();
      expect(wrapper.find("li")).toHaveLength(3);
    });
    it("renders the text Here is the list of notifications", () => {
      const text = "Here is the list of notifications";
      wrapper.update();
      expect(wrapper.find(".Notifications p").text()).toEqual(text);
    });
  });
