import { helloWorld, addTwoNum } from '../src/index';

describe('index.ts', () => {
  describe('helloWorld', () => {
    it('should return "Hello, World!"', () => {
      // Arrange & Act
      const result = helloWorld();
      
      // Assert
      expect(result).toBe('Hello, World!');
      expect(result).toEqual(expect.any(String));
    });

    it('should always return the same value', () => {
      // Arrange & Act
      const result1 = helloWorld();
      const result2 = helloWorld();
      
      // Assert
      expect(result1).toBe(result2);
    });
  });

  describe('addTwoNum', () => {
    it('should add two positive numbers correctly', () => {
      // Arrange
      const num1 = 4;
      const num2 = 4;
      const expected = 8;
      
      // Act
      const result = addTwoNum(num1, num2);
      
      // Assert
      expect(result).toBe(expected);
    });

    it('should handle negative numbers', () => {
      // Arrange & Act & Assert
      expect(addTwoNum(-2, -3)).toBe(-5);
      expect(addTwoNum(-5, 10)).toBe(5);
      expect(addTwoNum(5, -3)).toBe(2);
    });

    it('should handle zero values', () => {
      // Arrange & Act & Assert
      expect(addTwoNum(0, 0)).toBe(0);
      expect(addTwoNum(5, 0)).toBe(5);
      expect(addTwoNum(0, 7)).toBe(7);
    });

    it('should handle decimal numbers', () => {
      // Arrange & Act & Assert
      expect(addTwoNum(1.5, 2.5)).toBe(4);
      expect(addTwoNum(0.1, 0.2)).toBeCloseTo(0.3, 1);
    });
  });
});
