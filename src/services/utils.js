export const randomHexChar = () => {
    var char = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var key = (Math.random() * 15).toFixed(0);
    return char[key];
}

export const groupHex = (size) => {
    var group = "";
    for (var i = 0; i < size; i++) {
        group = group + randomHexChar();
    }
    return group;
}