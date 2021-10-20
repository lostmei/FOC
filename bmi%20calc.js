//<script language="JavaScript">
<!--
function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value

if(weight > 0 && height > 0){	
var finalBmi = 703 * weight/(height*12*height*12)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "You are underweight."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "You are at a healthy weight."
}
if(finalBmi > 25){
document.bmiForm.meaning.value = "You are overweight."
}
if(finalBmi > 30){
document.bmiForm.meaning.value = "You are obese. You NEED to lose weight"
}
}
else{
alert("Please Fill in everything correctly")
}
}
//-->
//</script>

