const bugInfo = require('./email.json');

//create a report of all of the unique e-mails

let findDuplicateEmails = bugInfo => {
  let emailsArr = bugInfo.emails;
  let emails = " ";
  let duplicatedAddresses = [];
  for (var i = 0; i < emailsArr.length; i++) {
    emails = emailsArr[i].email;
    if(duplicatedAddresses.indexOf(emails) < 0){
      duplicatedAddresses.push(emails);
    }
  }
  return duplicatedAddresses;
};

let duplicatedAddresses = findDuplicateEmails(bugInfo);
console.log(duplicatedAddresses);

console.log(findDuplicateEmails(bugInfo));











//the number of times an e-mail was sent to each address.




















// var circle = require('./email.json');

// var emailObj = circle.emails;

// function uniqueEmails(obj){
//   var emailAddresses;
//   var dateSent;
//   var newObj = {};
//   for (var i = 0; i < obj.length; i++) {
//     if(newObj.hasOwnProperty(obj[i].email) === false)
//     newObj[obj[i].email] = 0;
//     }
//   newObj[obj[i].email]++;
//   }
//   return newObj;
// }
// var sortedEmails = uniqueEmails(emailObj);
// console.log(sortedEmails);