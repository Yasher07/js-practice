const accountId = 123456
let accountEmail = "07yasher@gmail.com"
var accountPassword = "54321"
accountCity = "Kolkata"
let accountState;

//accountId = 2 // not allowed

accountEmail = "mdyasher@gmail.com"
accountPassword = "212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table({accountId, accountEmail, accountPassword, accountCity, accountState})