<template>
  <div class="form-container">
    <h1>Form</h1>
    <BaseInput
      id="name"
      v-model="name"
      label="Name"
      placeholder="Enter your name"
      type="text"
      required
    />

    <BaseInput
      id="email"
      v-model="email"
      label="Email"
      placeholder="Enter your email"
      type="email"
      required
    />

    <BaseInput
      id="message"
      v-model="message"
      label="Message"
      placeholder="Enter your message"
      type="text"
      required
    />

    <button type="submit" @click="validate">Submit</button>
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
      if (this.name === "" || this.name === null || this.name) {
        alert("Please enter a name");
      } else {
        this.validateEmail();
      }
    },
    validateEmail() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!regex.test(this.email)) {
        alert("Please enter a valid email address");
        this.email = "";
      } else {
        this.submitForm();
      }
    },

    submitForm() {
      this.$store
    }
  }
};

</script>

