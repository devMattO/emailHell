var circle = require('./email.json');

var emailObj = circle.emails;

function uniqueEmails(obj){
  var emailAddresses;
  var dateSent;
  var newArr = [];
  for (var i = 0; i < obj.length; i++) {
    emailAddresses = obj[i].email;
    dateSent = obj[i].sent;
    newArr.push(emailAddresses);
  }
    newArr.sort();
    return newArr;

}
var sortedEmails = uniqueEmails(emailObj);
console.log(sortedEmails);