// Calculations for conversions

app.controller("Milestokm", function () {
    var kmc = this;
    kmc.message = "Convert miles/Kilometer";
    kmc.milesToKilos = function (kilos) {
    kmc.answer = kilos / .6214;
  }
  kmc.kilosToMiles = function(miles){
    kmc.answer2 = miles * .6214;
    }
})

app.controller("Temperature", function () {
    var tc = this;
    tc.message = "Convert Fahrenheit/Celcius";
    tc.fahrToCel = function (fahr) {
    tc.answer = (fahr - 32) / 1.8;     
     }
    tc.celToFahr = function (cel){
      tc.answer2 = (cel * 1.8) + 32;
     }
 })

app.controller("Weight", function () {
    var wc = this;
    wc.message = "Convert Kilos/Pounds";
    wc.kiloToLbs = function (kilo) {
    wc.answer = kilo * 2.2046;     
    }
    wc.lbsToKilo = function (lbs){
      wc.answer2 = (lbs / 2.2046);
     }
 })

app.controller("Feet", function () {
    var fc = this;
    fc.message = "Convert Feet/Inches";
    fc.feetToInches = function (feet) {
    fc.answer = feet * 12;     
    }
    fc.inchesToFeet = function (inches){
      fc.answer2 = inches / 12;
    }
})

app.controller("BMI", function () {
    var bc = this;
    bc.message = "Calculate Your Body Mass Index";
    bc.Bmi = function (weight,inches) {
    bc.answer2 = ((weight / (inches * inches)) )* 703;
    }
 })

app.controller("LoanCalc", function() {
    var lc = this;
    lc.message = "Calculate the Loan Balance"; 
    lc.LoanCal = function (principal,rate,period){
    rate = (rate * .01) + 1;    
    lc.answer9 = principal * Math.pow(rate,period);
    }
})

