addUser = function() {
  console.log("In addUser");
  var contactName = document.getElementById("contactName").value;
  var contactYear = document.getElementById("contactYear").value;
  var contactMonth = document.getElementById("contactMonth").value;
  var contactDay = document.getElementById("contactDay").value;
  var contactGender = document.getElementById("contactGender").value;
  var contactEmail = document.getElementById("contactEmail").value;
  var contactAddress = document.getElementById("contactHomeAddress").value;
  var contactDeliveryPreference = document.getElementById("deliveryPreference").value;

  add2DB(contactName, contactYear, contactMonth, contactDay, contactGender, contactEmail, contactAddress, contactDeliveryPreference);
}
