const bugInfo = require('./email.json');

//create a report of all of the unique e-mails

let findDuplicateEmails = bugInfo => {
  let emailsArr = bugInfo.emails;
  let emails = " ";
  let duplicatedAddresses = [];
  let report = [];
  for (var i = 0; i < emailsArr.length; i++) {
    emails = emailsArr[i].email;
    if(duplicatedAddresses.indexOf(emails) < 0){
      duplicatedAddresses.push(emails);
    }
  }

  return duplicatedAddresses;
};

let duplicatedAddresses = findDuplicateEmails(bugInfo);

let findNumOfDupes = (bugInfo, dupAddys) => {
  let emailsArr = bugInfo.emails;
  let arr = [];
  for (var i = 0; i < emailsArr.length; i++) {
    // console.log(emailsArr[i].email);
    console.log({
          dupeAddys: dupAddys.forEach(el => {
            console.log(el, '<el');

          }),
          name: emailsArr[i].email

        });

  }

};

findNumOfDupes(bugInfo, duplicatedAddresses);
