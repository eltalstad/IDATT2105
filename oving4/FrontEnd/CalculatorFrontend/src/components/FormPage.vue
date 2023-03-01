<template>
  <h1 id="title">Form</h1>
  <div class="form-container">
    <form action="" @submit.prevent="onSubmit">

      <label>Full name: </label>
      <BaseInput
          class="input"
          id="name"
          v-model="name"
          type="text"
          required
      />

      <label>Email: </label>
      <BaseInput
        class="input"
        id="email"
        v-model="email"
        placeholder="Enter your email"
        type="email"
        required
      />

      <label>Message: </label>
      <BaseInput
        class="input"
        id="message"
        v-model="message"
        type="text"
        required
      />
      <button id="submit" @click="validate()" :disabled="isDisabled">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import { useFormStore } from "../store";
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
        .post("http://localhost:3000/form", data)
        .then((response) => {
          console.log(response);
          alert("Form submitted successfully");
          this.name = formStore.getName();
          this.email = formStore.getEmail();
          this.message = "";
        })
        .catch((error) => {
          console.log(error);
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

<style>

#title {
  text-align: center;
  margin-bottom: 10px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
}

label {
  margin-bottom: 10px;
}

.input {
  margin-bottom: 20px;
}

#submit {
  margin-top: 20px;
  height: 40px;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

#submit:disabled {
  background-color: #ccc;
}

button:disabled:hover {
  background-color: #ccc;
}

input {
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
}

input:focus {
  outline: none;
}

input:invalid {
  border: 1px solid red;
}

input:valid {
  border: 1px solid green;
}

input:invalid:focus {
  border: 1px solid red;
}

input:valid:focus {
  border: 1px solid green;
}



</style>
