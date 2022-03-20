import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);

    let calculator = new CalculatorService(mockLoggerService);
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
