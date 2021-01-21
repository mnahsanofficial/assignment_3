//kilometer to Meter converting
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return 'kilometer cannot be negative';
    }
    var Meter = kilometer * 1000;
    return Meter;
}
var result = kilometerToMeter(-5);
console.log(result);

//budget Calculator making
function budgetCaculator(watch, phone, laptop) {
    if(watch<0 || phone<0 || laptop<0){
        return 'Check your budget Again!!!'
    }
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}
var budgetMoney = budgetCaculator(2, 5, -5);
console.log(budgetMoney);

//hotel Cost counting
function hotelCost(days) {
    var cost = 0;
    if (days < 0) {
        return 'Day cannot be negative';
    }
    else if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var costFirst10 = 10 * 100;
        var remainingDays = days - 10;
        costSecond = remainingDays * 80;
        cost = (costFirst10 + costSecond);
    }
    else {
        var costFirst10 = 10 * 100;
        var costSecond10 = 10 * 80;
        var remainingDays = days - 20;
        costThird = remainingDays * 50;
        cost = (costFirst10 + costSecond10 + costThird);
    }
    return cost;
}
var rentMoney = hotelCost(-5);
console.log(rentMoney);

//find out bigger name friend
function megaFriend(friendArray) {
    var maxLength = 0;
    var biggestName = ' ';
    if(friendArray.length==0){
        return 'Check your array again!!';
    }
    for (var i = 0; i < friendArray.length; i++) {
        if (friendArray[i].length>=maxLength ) {
            maxLength = friendArray[i].length
            biggestName = friendArray[i];
        }
    }
    return biggestName;
}
var friendNames = megaFriend([ 'nazmul','ahsana']);
console.log(friendNames);