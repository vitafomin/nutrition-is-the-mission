var gainHead = $(".gain-head")
var gainInfo = $(".gain-info")
var gainInput = $(".gain-input")
var gainGender = $(".gain-gender")
var gainSubmit = $(".btn-gain")
var gainBmiEl = $(".gain-bmi")
var gainWeightEl = $(".wei-value")
var gainHeightEl = $(".hei-value")
var gainAgeEl = $(".age-value")
var gainGenderEl = $(".gen-value")

function gainBmi(event, age, weight, height) {
    event.preventDefault();

    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3eb722f518mshee8759df28c4085p1c9e92jsnfda40a8170a9',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    var bmiUrl = ("https://fitness-calculator.p.rapidapi.com/bmi?age=" + age + "&weight=" + weight + "&height=" + height);

    console.log(bmiUrl);
    fetch(bmiUrl, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var bmiData = data.data;
        console.log(bmiData)

        gainBmiEl.text("Your BMI is " + bmiData.bmi + ", your health class is considered " + bmiData.health);

    });



    
    
}

gainSubmit.on("click", function(event) {
    event.preventDefault();
    gainBmi(event, gainAgeEl.val().trim(), gainWeightEl.val().trim(), gainHeightEl.val().trim())
    console.log(gainAgeEl.val())
    console.log(gainWeightEl.val())
    console.log(gainHeightEl.val())
})














var loseHeader = $(".lose-header")
var loseInfo = $(".lose-info")
var loseInput = $(".lose-input")
var loseWeight = $(".lose-weight")
var formControl = $(".form-control")
var loseHeight = $(".lose-height")
var loseAge = $(".lose-age")
var loseGender = $(".lose-gender")
var btnBtnPrimary = $(".btn btn-primary")
var loseBmi = $(".lose-bmi")
var weiInput = $(".wei-input")
var heiInputFormControl = $(".hei-input form-control")
var ageInputFormControl = $(".age-input form-control")
var genInputFormControl = $(".gen-input form-control")