function getAge(inputString) {
    // return correct age (int). Happy coding :)
    if (typeof inputString === 'string') {
        return parseInt(inputString.charAt(0));
    } else {
        return "Error"
    }
}