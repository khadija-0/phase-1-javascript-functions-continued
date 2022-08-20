// code your solution here

function saturdayFun(defaultActivity = "roller-skate") {
    return `This Saturday, I want to ${defaultActivity}!`;
}

let mondayWork = function (defaultActivity = "go to the office") {
    return `This Monday, I will ${defaultActivity}.`;
};

let wrapAdjective = function (wrapper = '.'){
    return function (emphatic = "special"){
        return `You are ${wrapper}${emphatic}${wrapper}!`;
    };
};