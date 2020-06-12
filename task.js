'use strict';

// Task 1
function getMonths(date, today) {
    return ((date.getFullYear() - today.getFullYear()) * 12) - today.getMonth() + date.getMonth();
}

function getNumber(value, percentage=false) {
    if (percentage == true) {
        if (Number(value) > 1) {
            return (Number(value) / 100);
        } else {
            return Number(value);
        }
    } else {
        return Number(value);
    }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let creditBody = getNumber(amount) - getNumber(contribution);
    let percentRate = getNumber(percent, true) / 12
    let today = new Date();
    let creditMonths = getMonths(date, today);
    let monthlyPayment = creditBody * (percentRate + percentRate / (Math.pow((1 + percentRate), creditMonths) - 1));
    return parseFloat((monthlyPayment * creditMonths).toFixed(2));
}

// Task 2
function getGreeting(name) {
    let alterName = 'Аноним'
    if (!name || name == "null" || name == "undefined") {
        return `Привет, мир! Меня зовут ${alterName}`;
    } else {
        return `Привет, мир! Меня зовут ${name}`
    }
}