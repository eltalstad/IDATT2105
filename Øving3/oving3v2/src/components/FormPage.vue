<template>
  <h1>Form</h1>
  <div class="form-container">
    <form action="" @submit.prevent="onSubmit">

      <label>Full name: </label>
      <BaseInput
          id="name"
          v-model="name"
          type="text"
          required
      />

      <label>Email: </label>
      <BaseInput
        id="email"
        v-model="email"
        placeholder="Enter your email"
        type="email"
        required
      />

      <label>Message: </label>
      <BaseInput
        id="message"
        v-model="message"
        type="text"
        required
      />
      <button type="submit" @click="validate()" :disabled="isDisabled">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import { useFormStore } from "@/store";
import axios from "axios";

export default {
  name: "FormPage",
  components: {
    BaseInput,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    validateName() {
      if (this.name === "" || this.name === null) {
        alert("Please enter a name");
      } else {
        return true;
      }
    },
    validateEmail() {
      const regex =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (this.email === "" || this.email === null) {
        alert("Please enter an email");
      } else if (!regex.test(this.email)) {
        alert("Please enter a valid email");
      } else {
        return true;
      }
    },
    validateMessage() {
      if (this.message === "" || this.message === null) {
        alert("Please enter a message");
      } else {
        return true;
      }
    },
    validate() {
      if (
        this.validateName() &&
        this.validateEmail() &&
        this.validateMessage()
      ) {
        this.submitForm();
      }
    },
    submitForm() {
      const formStore = useFormStore();
      formStore.setName(this.name);
      formStore.setEmail(this.email);

      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      axios
        .post("http://localhost:3000/dummyform", data)
        .then((response) => {
          console.log(response);
          alert("Form submitted successfully");
          this.name = formStore.getName();
          this.email = formStore.getEmail();
          this.message = "";
        })
        .catch((error) => {
          console.log(error);
          alert("Form submission failed");
        });
    },
  },
  computed: {
    isDisabled() {
      return this.name === "" || this.email === "" || this.message === "";
    },
  },
};
</script>
