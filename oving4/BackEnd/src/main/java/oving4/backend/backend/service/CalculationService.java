package oving4.backend.backend.service;

import org.springframework.stereotype.Service;
import oving4.backend.backend.model.Equation;

@Service
public class CalculationService {

    private double answer;
    private Equation equation;

    public double solve(Equation equation) {
        this.equation = equation;
        switch (equation.getOperator()) {
            case "+":
                answer = equation.getOperand1() + equation.getOperand2();
                break;
            case "-":
                answer = equation.getOperand1() - equation.getOperand2();
                break;
            case "*":
                answer = equation.getOperand1() * equation.getOperand2();
                break;
            case "/":
                answer = equation.getOperand1() / equation.getOperand2();
                break;
            default:
                throw new IllegalStateException("Unexpected value: " + equation.getOperator());
        }
        return answer;
    }

    public Equation getEquation() {
        return equation;
    }

    public double getAnswer() {
        return answer;
    }
}
