//undefined;
export function createPerson(
    firstName: string,
    lastName?: string,
): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

export function squareof(x: any) {
    if (typeof x === 'number') return x * x;
    return null;
}

const squareofTwoNumber = squareof(2);

if (squareofTwoNumber === null) {
    console.log('invalid');
} else {
    console.log(squareofTwoNumber * 100);
}
