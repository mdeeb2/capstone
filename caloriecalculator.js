var calorieArray = new Array();
calorieArray["margarita"] = 200;
calorieArray["shrimp"] = 99;
calorieArray["sweettea"] = 91;
calorieArray["ribs"] = 299;
calorieArray["burger"] = 354;
calorieArray["pizza"] = 285;
calorieArray["brisket"] = 270;
calorieArray["corona"] = 270;
calorieArray["coke"] = 140;

function getCalorie() {
  var Calorie = 0;
  var theForm = document.forms["caloriesConsumed"];
  var selectedCalories = theForm.elements["selectedCalories"];

  for (var i = 0; i < selectedCalories.length; i++) {
  	if(selectedCalories[i].checked){
    	Calorie += calorieArray[selectedCalories[i].value] || 0;
    }
  }

  return Calorie;
}

function getTotals() {
  var totalCalories = getCalorie();
  var totalCaloriesDIV = document.getElementById("totalCalories");
  totalCaloriesDIV.innerText = "Total Calories: " + totalCalories;
}
