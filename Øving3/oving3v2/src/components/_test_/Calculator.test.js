import { test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CalculatorApp from "../CalculatorApp.vue";

test("CalculatorApp", () => {
  const wrapper = mount(CalculatorApp);

  wrapper.setProps({ value: 1 });
  expect(wrapper.html()).toContain("1");
});
