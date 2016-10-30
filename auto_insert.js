db = connect("localhost:27017/lazicard");

/*
for (i = 1; i <= 9; i++) {
  for (j = 0; j < 10; j++){
    db.Address_Book.insert({ "user_email": "useremail_"+i+"@colorado.edu", "fname": "ContactF"+j, "lname": "ContactL"+j, "birthday": "000000"+j, "email_add": "user"+j+"@colorado.edu", "m_o_d": "true", "street_add": "Boulder, Colorado" });
  }
}
*/

db.Address_Book.insert({ "user_email": "nimo0295@colorado.edu", "fname": "Dan", "lname": "Schwabacher", "birthday": "053096", "email_add": "dasc0551@colorado.edu", "m_o_d": "false", "street_add": "Boulder, Colorado" });

for (i = 0; i < 9; i++) {
  db.Address_Book.insert({ "user_email": "nimo0295@colorado.edu", "fname": "UserF"+i, "lname": "UserL"+i, "birthday": "000000"+i, "email_add": "user"+i+"@colorado.edu", "m_o_d": "false", "street_add": "Boulder, Colorado" });
}
