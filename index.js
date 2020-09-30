// Your code here
function createEmployeeRecord(arr){
  return {firstName:arr[0], familyName: arr[1], title:arr[2], payPerHour:arr[3], timeInEvents:[], timeOutEvents: []};
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
