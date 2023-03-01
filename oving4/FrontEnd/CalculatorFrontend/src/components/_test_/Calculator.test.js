import { it, expect, describe } from "vitest";
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

    it("appends decimal when a decimal button is clicked", async () => {
    const wrapper = mount(CalculatorApp);
    const button = wrapper.find("#decimal");
    await button.trigger("click");
    expect(wrapper.text()).toContain(".");
    });

    it("calculates the sum of two numbers", async () => {
    const wrapper = mount(CalculatorApp);
    const button1 = wrapper.find("#number1");
    const button2 = wrapper.find("#number2");
    const buttonPlus = wrapper.find("#plus");
    const buttonEquals = wrapper.find("#equals");
    await button1.trigger("click");
    await buttonPlus.trigger("click");
    await button2.trigger("click");
    await buttonEquals.trigger("click");
    expect(wrapper.text()).toContain("3");
    });

    /*
    it("throws an error when dividing by zero", async () => {
    const wrapper = mount(CalculatorApp);
    const button1 = wrapper.find("#number1");
    const button0 = wrapper.find("#number0");
    const buttonDivide = wrapper.find("#divide");
    const buttonEquals = wrapper.find("#equals");
    await button1.trigger("click");
    await buttonDivide.trigger("click");
    await button0.trigger("click");
    await buttonEquals.trigger("click");
    expect(wrapper.text()).toContain("Error");
    });
     */
});
