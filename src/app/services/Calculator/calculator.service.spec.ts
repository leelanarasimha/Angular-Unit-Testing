import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    const calculator = new CalculatorService();
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
  });

  it('should subtract two numbers', () => {
    let calculator = new CalculatorService();
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
  });
});
