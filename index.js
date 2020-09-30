// Your code here
function createEmployeeRecord(arr){
  return {firstName:arr[0], familyName: arr[1], title:arr[2], payPerHour:arr[3], timeInEvents:[], timeOutEvents: []};
}

function createEmployeeRecords(arr){
  let result = [];
  for(let i =0; i < arr.length; i++){
    result.push(createEmployeeRecord(arr[i]))
  }
  return result;
}

function createTimeInEvent(employee, time){
  employee.timeInEvents.push({type:"TimeIn", date: time.split(" ")[0], hour: parseInt(time.split(" ")[1])});
  return employee;
}

function createTimeOutEvent(employee,time){
  employee.timeOutEvents.push({type:"TimeOut", date: time.split(" ")[0], hour: parseInt(time.split(" ")[1])});
  return employee;
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
