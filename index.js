// Your code here
function saturdayFun(a = "roller-skate"){
    return `This Saturday, I want to ${a}!`
}

function mondayWork(a = 'go to the office'){
    return `This Monday, I will ${a}.`
}

function wrapAdjective(f = "*"){
    return function(x = "special"){
        return `You are ${f}${x}${f}!`
    }
}

wrapAdjective("%")("a dedicated programmer")

let Calculator = {
    add: (a, b)=>{return a+b},
    subtract: (a, b)=>{return a-b},
    multiply: (a, b)=>{return a*b},
    divide: (a, b)=>{return a/b}
}

function actionApplyer(i, fArray){

    let current = i

    for (let i = 0; i < fArray.length; i++){
        current = fArray[i](current)
    }

    return current
}