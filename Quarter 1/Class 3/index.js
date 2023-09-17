"use strict";
function returnIndex(list) {
    let firstIndex = list[0];
    let i = 0;
    const lastIndex = list[list.length - 1];
    for (firstIndex; firstIndex < lastIndex; firstIndex++) {
        if (!list.find((elem) => elem == firstIndex)) {
            console.log(i);
        }
        i++;
    }
}
let userList = [21, 33, 40];
returnIndex(userList);
