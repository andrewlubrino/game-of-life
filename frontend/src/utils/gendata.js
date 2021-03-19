function genData(c, r) {
    const returnArray = [];

    for (let i = 0; i < r; i++) {
        const rowArray = [];
        for (let j = 0; j < c; j++) {
        rowArray.push(true);
        }
        returnArray.push(rowArray);
    }

    return returnArray;
}

export { genData }
