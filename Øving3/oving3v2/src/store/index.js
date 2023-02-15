import { defineStore } from "pinia";

export const useFormStore = defineStore({
  id: "form",
  state: () => ({
    name: "",
    email: "",
    message: "",
  }),
  getters: {},
  actions: {
    setName(name) {
      this.name = name;
    },
    setEmail(email) {
      this.email = email;
    },
    setMessage(message) {
      this.message = message;
    },
    reset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
});
