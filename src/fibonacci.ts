export const computeFibonacciNumber = (position: number, recursion: boolean = false): number => {
    if (position === 0) {
        return 0;
    }
    if (position < 0) {
        return computeNegativeFibonacci(position);
    }
    if (recursion) {
        return recursiveFibonacci1(1, 1, position - 2);
    }
    if (recursion) return recursiveFibonacci(position);

    
    let notNullPosition = position;
    if (notNullPosition === null) {
        notNullPosition = 1;   
    }
    if (position <= 2) {
        return 1;
    }

    let i = 1;
    let j = 1;

    let smallFibonacciNumber = 1;
    let largeFibonacciNumber = 1;

    let currentPosition = 2;
    while (currentPosition < position) {
        const nextFibonacciNumber = smallFibonacciNumber + largeFibonacciNumber;
        smallFibonacciNumber = largeFibonacciNumber;
        largeFibonacciNumber = nextFibonacciNumber;
        currentPosition++;
    }
    return largeFibonacciNumber;
};

const computeNegativeFibonacci = (position: number): number => {
    if (position >= 0) {
        throw new Error(`Position must be less than zero! Received: ${position}.`);
    }
    const resultIsNegative = position % 2 === 0;
    const absoluteResult = computeFibonacciNumber(-position);
    return resultIsNegative ? absoluteResult * -1 : absoluteResult;
}

const recursiveFibonacci1 = (previous: number, current: number, stepsLeft: number): number => {
    if (stepsLeft < 0) {
        return 1;
    }
    switch (stepsLeft) {
        case 0:
            return current;
        default:
            return recursiveFibonacci1(current, previous + current, stepsLeft - 1);
    }
}
const recursiveFibonacci = (initialPosition: number, left: number = 0, right: number = 1, position?: number): number => {
    const currentPosition = position ?? initialPosition;
    if (initialPosition === 0) return 0;
    if (currentPosition === 0) return left;
    if (initialPosition > 0) {
        return recursiveFibonacci(initialPosition, right, left + right, currentPosition - 1);
    } else {
        return recursiveFibonacci(initialPosition, right - left, left, currentPosition + 1);
    }
}
