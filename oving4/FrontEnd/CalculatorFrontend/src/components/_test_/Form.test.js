import { beforeEach, it, describe, test, expect, vi} from "vitest";
import { mount } from "@vue/test-utils";
import FormPage from "../FormPage.vue";
import { useFormStore } from "../../store";
import { createTestingPinia } from "@pinia/testing";

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

test("Name and email are stored in state", () => {
    const wrapper = mount(FormPage, {
        global: {
            plugins: [createTestingPinia({createSpy: vi.fn()})]
        }
    })
    const store = useFormStore();
    expect(store.name).toBe("");
    expect(store.email).toBe("");

    store.name = "John";
    store.email = "john@doe.com";

    expect(store.name).toBe("John");
    expect(store.email).toBe("john@doe.com");
    });