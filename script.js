/*Begin creating all elements in form*/
var mainForm = document.createElement("form");
mainForm.setAttribute('name',"login");
mainForm.setAttribute('action',"google.com");
mainForm.setAttribute('onsubmit',"return validate()");

//Creating first input-block - (age)
var getAge = document.createElement("input"); 
getAge.setAttribute('type',"text");
getAge.setAttribute('name',"age");
getAge.setAttribute('placeholder',"Input Your Age");

//Creating second input-block - (name)
var getName = document.createElement("input"); 
getName.setAttribute('type',"text");
getName.setAttribute('name',"username");
getName.setAttribute('placeholder',"Your name:(user_[name])");

//Creating third input-block - (date)
var getDate = document.createElement("input"); 
getDate.setAttribute('type',"text");
getDate.setAttribute('name',"date");
getDate.setAttribute('placeholder',"Input Date (dd/mm/yyyy)");

// Submit button
var sbmButton = document.createElement("input"); 
sbmButton.setAttribute('type',"submit");
sbmButton.setAttribute('value',"Validate Me");

mainForm.appendChild(getAge);
mainForm.appendChild(getName);
mainForm.appendChild(getDate);
mainForm.appendChild(sbmButton);
/*End creating all elements in form*/

document.getElementsByTagName('body')[0].appendChild(mainForm);

// Start creating check-validate function
function validate() {
  var getNameValidation = /^user_+[0-9a-z@]/i;
  var date = new Date();
  var currentDate = date.getDate();
	
    if(currentDate<10)
      currentDate = "0" + currentDate;
	
	
  var currentMonth = date.getMonth() + 1;
    if(currentMonth<10) 
      currentMonth = "0" + currentMonth;
	
	
  var currentYear = date.getFullYear();
  var fullDate = currentDate + "/" + currentMonth + "/" + currentYear;
    if (! /^[0-9]+$/.test(getAge.value)) {
      alert("Your age is invalid");
      return false;
	}

    if(getNameValidation.test(getName.value) == false){
      alert("Your name is invalid");
      return false;
	}
	
    if (getDate.value !== fullDate) {
      alert("Your date is invalid");
      return false;
	}
    return true;
}
// End creating check-validate function
