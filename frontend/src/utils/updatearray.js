function sumFunction(compareArr, data, columns, rows){

    let sumResult = 0;

    for(let i = 0; i < 3; i++){
        if(compareArr[0][i] >= 0 &&  compareArr[0][i] < rows){

            for(let j = 0; j < 3; j++){

                if(compareArr[1][j] >= 0 && compareArr[1][j] < columns){

                    sumResult += data[compareArr[0][i]][compareArr[1][j]]

                }
            }
        }
    }

    sumResult -= data[compareArr[0][1]][compareArr[1][1]];
    console.log(sumResult)

    return sumResult;
}
  
function updateArray(data, columns, rows){
    let returnData = data.reduce((acc, elem) => {
        acc.push([...elem])
        return acc;
    }, []);
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            const compareArr = [[i-1, i, i+1], [j-1, j, j+1]];
            const sum = sumFunction(compareArr, data, columns, rows);
            if(data[i][j]){
                if(sum !== 2 && sum !== 3){
                    returnData[i][j] = !returnData[i][j];
                }
            }
            else{
                if(sum === 3){
                    returnData[i][j] = !returnData[i][j];
                }
            }
        }
    }
    return returnData;
}

export { updateArray }