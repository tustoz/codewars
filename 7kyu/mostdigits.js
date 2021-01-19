function findLongest(array) {
    let mostNum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length > mostNum.toString().length) {
            mostNum = array[i];
        }
    }
    return mostNum;
}