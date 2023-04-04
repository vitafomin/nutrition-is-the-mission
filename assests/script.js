var gainHead = $(".gain-head")
var gainInfo = $(".gain-info")
var gainInput = $(".gain-input")
var gainName = $(".gain-gender")
var gainSubmit = $(".btn-gain")
var gainBmiEl = $(".gain-bmi")
var gainWeightEl = $(".wei-value")
var gainHeightEl = $(".hei-value")
var gainAgeEl = $(".age-value")
var gainGenderEl = $(".name-value")
var healthyBmiEl = $(".healthy-bmi")
var recipes = $(".recipes")
var recipeHead = $(".recipes-header")


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
        healthyBmiEl.text("Healthy BMI Range is " + bmiData.healthy_bmi_range) 

    });
     
}

function gainRecipes() {
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3eb722f518mshee8759df28c4085p1c9e92jsnfda40a8170a9',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    }    

    var recipeUrl = ("https://edamam-recipe-search.p.rapidapi.com/search?q=beef");

    fetch(recipeUrl, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.hits)

        recipeHead.text("Here are some recipes we recomend for you nutrition goals")

        for (var i = 0; i < data.hits.length; i++){
            var linkEl = $("<a>")
            linkEl.attr("href", data.hits[i].recipe.url).text("recipe " + [i]);
            var recipeList = $("<li>")
            recipeList.append(linkEl)
            recipes.append(recipeList);


            // imgEl.src = data.hits[i].recipe.image;
            // recipes.append(imgEl);
        }

        // + data.hits[i].recipe.url;

    })




}





gainSubmit.on("click", function(event) {
    event.preventDefault();
    gainBmi(event, gainAgeEl.val().trim(), gainWeightEl.val().trim(), gainHeightEl.val().trim())
    console.log(gainAgeEl.val())
    console.log(gainWeightEl.val())
    console.log(gainHeightEl.val())
    gainRecipes()
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