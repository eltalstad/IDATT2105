import { it, test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import CalculatorApp from "../CalculatorApp.vue";

describe("Calculator", () => {
  it("renders correctly", () => {
    const wrapper = mount(CalculatorApp);
    expect(wrapper.text()).toContain("Calculator");
  });

  it("appends number when a number button is clicked", async () => {
    const wrapper = mount(CalculatorApp);
    const button = wrapper.find("#number1");
    await button.trigger("click");
    expect(wrapper.text()).toContain("1");
  });
});
