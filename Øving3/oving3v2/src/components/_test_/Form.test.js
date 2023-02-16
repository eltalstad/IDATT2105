import { beforeEach, it, describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import FormPage from "../FormPage.vue";

test("Mount FormPage", () => {
  const wrapper = mount(FormPage);
  expect(wrapper.text()).toContain("Form");
});

test("FormPage has a form", () => {
  const wrapper = mount(FormPage);
  expect(wrapper.find("form").exists()).toBe(true);
});
