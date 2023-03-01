package oving4.backend.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import oving4.backend.backend.model.Equation;
import oving4.backend.backend.service.CalculationService;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class CalculatorController {

    @Autowired
    private CalculationService calculationService;

    Logger logger = LoggerFactory.getLogger(CalculatorController.class);

    @PostMapping("/calculate")
    public double calculate(@RequestBody Equation equation) {
        logger.info("Received equation: " + equation.toString());
        double result = calculationService.solve(equation);
        logger.info("Result: " + calculationService.getAnswer());
        return result;
    }
}
