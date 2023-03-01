import { defineStore } from "pinia";

export const useFormStore = defineStore({
  id: "form",
  state: () => ({
    name: "",
    email: "",
    message: "",
  }),

  actions: {
    setName(name) {
      this.name = name;
    },
    getName() {
      return this.name;
    },
    setEmail(email) {
      this.email = email;
    },
    getEmail() {
      return this.email;
    },
  },
});
