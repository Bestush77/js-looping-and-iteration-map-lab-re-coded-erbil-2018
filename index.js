// Code your solution in this file
let drivers = [];

function lowerCaseDrivers(drivers){
  return drivers.map((el)=>{return el.toLowerCase();});
}

function attributesToPhrase(driver){
  return driver.map((el) =>{return el.name +" is from "+ el.hometown })
}
function nameToAttributes(array){
  return array.map((el)=>{ 
    let firstname =el.split(' ')[0];
  let surName =el.split(' ')[1];
  return {firstName: firstname, lastName: surName}
  });
}


// function nameToAttributes (list) {
//   return list.map(function (driver) {
//     const driverFirst = driver.split(' ')[0];
//     const driverLast = driver.split(' ')[1];

//     return { firstName: driverFirst, lastName: driverLast };
//   });
// }