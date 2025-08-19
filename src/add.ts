function addTwoNum(a: number, b: number): number { 
    if (checkA(a) && checkB(b))  {
        return a + b;
    }
    return 0;
}

function checkA(a: number): boolean {
    if (a > 0 && a < 100){
        return true
    }
    return false
}

function checkB(b: number): boolean {
    if (b > 0 && b < 100){
        return true
    }
    return false
}

export { addTwoNum }