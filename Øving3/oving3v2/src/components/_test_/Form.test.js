import { beforeEach, it, describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, PiniaPlugin } from "pinia";
import { provide, defineComponent } from "vue";
import FormPage from "../FormPage.vue";
import { useFormStore } from "../../store";

test("Mount FormPage", () => {
  const wrapper = mount(FormPage);
  expect(wrapper.text()).toContain("Form");
});

test("FormPage has a form", () => {
  const wrapper = mount(FormPage);
  expect(wrapper.find("form").exists()).toBe(true);
});

test("FormPage has a submit button", () => {
    const wrapper = mount(FormPage);
    expect(wrapper.find("button").exists()).toBe(true);
    });

test("Name and input are stored in the store", () => {
    const wrapper = mount(FormPage);
    const nameInput = wrapper.find("#name");
    nameInput.setValue("John Doe");
    expect(useFormStore().getName()).toBe("John Doe");
    })

