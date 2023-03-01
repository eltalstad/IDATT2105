<template>
  <h1 id="title">Calculator</h1>
  <div class="page">
    <div class="calculator">
      <div class="display"> {{ currentNumber }} </div>
      <button @click="clear">C</button>
      <button @click="del">DEL</button>
      <button @click="sign">+/-</button>
      <button id="divide" class="operator" @click="divide">/</button>
      <button id="number7" @click="appendNumber('7')">7</button>
      <button id="number8" @click="appendNumber('8')">8</button>
      <button id="number9" @click="appendNumber('9')">9</button>
      <button class="operator" @click="multiply">*</button>
      <button id="number4" @click="appendNumber('4')">4</button>
      <button id="number5" @click="appendNumber('5')">5</button>
      <button id="number6" @click="appendNumber('6')">6</button>
      <button class="operator" @click="minus">-</button>
      <button id="number1" @click="appendNumber('1')">1</button>
      <button id="number2" @click="appendNumber('2')">2</button>
      <button id="number3" @click="appendNumber('3')">3</button>
      <button id="plus" class="operator" @click="plus">+</button>
      <button id="number0" @click="appendNumber('0')">0</button>
      <button id="decimal" @click="dot">.</button>
      <button id="equals" class="operator equals" @click="equals">=</button>
    </div>
  </div>

  <div class="logBox">
    <h1>Log:</h1>
    <div class="log">
      <ul>
        <li v-for="calculation in log" :key="calculation">
          {{ calculation }}
        </li>
      </ul>
    </div>
    <button @click="clearLog" id="clearLog">Clear log</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CalculatorApp",
  data() {
    return {
      previousNumber: "",
      currentNumber: "",
      result: "",
      operator: "",
      operatorPressed: false,
      log: [],
    };
  },
  methods: {
    clear() {
      this.currentNumber = "";
    },
    del() {
      this.currentNumber = this.currentNumber.slice(0, -1);
    },
    setPreviousNumber() {
      this.previousNumber = this.currentNumber;
      this.operatorPressed = true;
    },
    divide() {
      this.operator = "/";
       this.setPreviousNumber();
    },
    multiply() {
      this.operator = "*";
      this.setPreviousNumber();
    },
    minus() {
      this.operator = "-";
      this.setPreviousNumber();
    },
    plus() {
      this.operator = "+";
      this.setPreviousNumber()
    },
    equals() {
      if(this.previousNumber == "." || this.currentNumber == ".") {
        alert("Invalid input");
        this.result = "Error";
        return;
      }
      if(this.operator === "/" && this.currentNumber === "0") {
        alert("You can`t divide by 0");
        this.result = "Error";
        return
      }
      if(this.previousNumber !== "" && this.currentNumber !== "") {
        this.sendData();
      }
    },
    appendNumber(number) {
      if (this.operatorPressed) {
        this.currentNumber = "";
        this.operatorPressed = false;
      }
      this.currentNumber = `${this.currentNumber}${number}`;
    },
    sign() {
      this.currentNumber = this.currentNumber.charAt(0) === "-" ? this.currentNumber.slice(1) : `-${this.currentNumber}`;
    },
    dot() {
      if (this.currentNumber.indexOf(".") === -1) {
        this.currentNumber = `${this.currentNumber}.`;
      }
    },
    clearLog() {
      this.log = [];
    },
    sendData() {
      const data = {
        operand1: this.previousNumber,
        operand2: this.currentNumber,
        operator: this.operator,
      };
      axios.post("http://localhost:8081/calculate", data).then((response) => {
        this.result = response.data;
        console.log(this.result);
        this.log.push(this.previousNumber + this.operator + this.currentNumber + "=" + this.result);
        this.currentNumber = this.result;
        this.previousNumber = "";
        this.operator = "";
        this.operatorPressed = false;
      }).catch((error) => {
        console.log(error);
      });
    },
    onKeyPress(e) {
      switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          this.appendNumber(e.key);
          break;
        case ".":
          this.dot();
          break;
        case "Enter":
          this.equals();
          break;
        case "Backspace":
          this.del();
          break;
        case "Escape":
          this.clear();
          break;
        case "+":
          this.plus();
          break;
        case "-":
          this.minus();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
      }
    },
  },
  created() {
    window.addEventListener("keydown", this.onKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeyPress);
  },
};
</script>

<style scoped>
#title {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 3rem;
}

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(75px, auto);
  grid-gap: 0.5rem;
  width: 50%;
  margin: 0 auto;
}

.display {
  grid-column: 1 / 5;
  background-color: lightgray;
  color: black;
  font-size: 2rem;
  text-align: right;
  padding: 1rem;
  border: 0.05em solid black;
}

.logBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5em;
}

.log {
  width: 50%;
  height: 200px;
  border: 0.05em solid black;
  overflow: scroll;
}

.log ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.log li {
  padding: 0.5rem;
  border-bottom: 0.05em solid black;
}

button {
  background-color: lightgray;
  border: 0.05em solid black;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  cursor: pointer;
}

button:hover {
  background-color: black;
  color: white;
}

button:active {
  background-color: white;
  color: black;
}

.operator {
  background-color: orange;
  color: white;
}

.equals {
  background-color: darkgray;
  color: white;
}
</style>


