var gainSubmit = $(".btn-gain")
var gainBmiEl = $(".gain-bmi")
var gainWeightEl = $(".wei-value")
var gainHeightEl = $(".hei-value")
var gainAgeEl = $(".age-value")
var gainNameEl = $(".name-value")
var healthyBmiEl = $(".healthy-bmi")
var recipes = $(".recipes")
var recipeHead = $(".recipes-header")
var navGainEl = $(".nav-gain")
var statement = $(".statement")
var loseSubmit = $(".btn-lose")
var loseBmiEl = $(".lose-bmi")
var loseWeightEl = $(".wei-input")
var loseHeightEl = $(".hei-input")
var loseAgeEl = $(".age-input")
var loseNameEl = $(".name-input")
var navLoseEl = $(".nav-lose")

function gainBmi(event, age, weight, height) {
    event.preventDefault();

    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3eb722f518mshee8759df28c4085p1c9e92jsnfda40a8170a9',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };

    var bmiUrl = ("https://cors-anywhere.herokuapp.com/https://fitness-calculator.p.rapidapi.com/bmi?age=" + age + "&weight=" + weight + "&height=" + height);

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

        
        if (gainNameEl.val() != "") {
            var userArr = JSON.parse(localStorage.getItem("gainUsers")) || [];

            var user = {
                name: gainNameEl.val(),
                bodyInfo: bmiData.bmi
            }
            userArr.push(user);
        
            localStorage.setItem("gainUsers", JSON.stringify(userArr))
            diplayGainBmi();
        }
    }); 
}

function diplayGainBmi() {
    var userArr = JSON.parse(localStorage.getItem("gainUsers"));

    navGainEl.empty();

    for (var i = 0; i < userArr.length; i++) {
        var liEl = $("<li>");
        liEl.attr("class", "user-info")
        liEl.text(userArr[i].name + " - " + userArr[i].bodyInfo);
        navGainEl.append(liEl);
    }
}

function gainRecipes() {
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3eb722f518mshee8759df28c4085p1c9e92jsnfda40a8170a9',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    }    

    var recipeUrl = ("https://cors-anywhere.herokuapp.com/https://edamam-recipe-search.p.rapidapi.com/search?q=beef");

    fetch(recipeUrl, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.hits)

        recipeHead.text("Here are some recipes we recomend for you nutrition goals")
       

        recipes.empty();

        for (var i = 0; i < data.hits.length; i++){
            var linkEl = $("<a>")
            linkEl.attr("href", data.hits[i].recipe.url).text("recipe " + [i]);
            var recipeList = $("<button>")
            recipeList.attr("class", "button is-dark is-rounded")
            recipeList.append(linkEl)
            recipes.append(recipeList);
        }
        

        statement.text("This mission is in YOUR hands")

    })
}

diplayGainBmi();

function loseBmi (event, age, weight, height) {
    event.preventDefault();
    
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3eb722f518mshee8759df28c4085p1c9e92jsnfda40a8170a9',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };
    
    var bmiUrl = ("https://cors-anywhere.herokuapp.com/https://fitness-calculator.p.rapidapi.com/bmi?age=" + age + "&weight=" + weight + "&height=" + height);
    
    console.log(bmiUrl);
    fetch(bmiUrl, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var bmiData = data.data;
        console.log(bmiData)
        
        loseBmiEl.text("Your BMI is " + bmiData.bmi + ", your health class is considered " + bmiData.health);
        healthyBmiEl.text("Healthy BMI Range is " + bmiData.healthy_bmi_range) 

        if (loseNameEl.val() != "") {
            var userArr = JSON.parse(localStorage.getItem("loseUsers")) || [];

            var user = {
                name: loseNameEl.val(),
                bodyInfo: bmiData.bmi
            }
            userArr.push(user);
        
            localStorage.setItem("loseUsers", JSON.stringify(userArr))
            diplayLoseBmi();
        }
        
        
    })  
}

function diplayLoseBmi() {
    var userArr = JSON.parse(localStorage.getItem("loseUsers"));

    navLoseEl.empty();

    for (var i = 0; i < userArr.length; i++) {
        var liEl = $("<li>");
        liEl.attr("class", "user-info")
        liEl.text(userArr[i].name + " - " + userArr[i].bodyInfo);
        navLoseEl.append(liEl);
    }
}

function loseRecipes() {
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3eb722f518mshee8759df28c4085p1c9e92jsnfda40a8170a9',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    }    
    
    var recipeUrl = ("https://cors-anywhere.herokuapp.com/https://edamam-recipe-search.p.rapidapi.com/search?q=keto");
    
    fetch(recipeUrl, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data.hits)
        
        recipeHead.text("Here are some recipes we recomend for you nutrition goals")

        recipes.empty();
        
        for (var i = 0; i < data.hits.length; i++){
            var linkEl = $("<a>")
            linkEl.attr("href", data.hits[i].recipe.url).text("recipe " + [i]);
            var recipeList = $("<button>")
            recipeList.attr("class", "button is-dark is-rounded")
            recipeList.append(linkEl)
            recipes.append(recipeList);
            
        }
        
        statement.text("This mission is in YOUR hands")
        
    })
}        

diplayLoseBmi();

gainSubmit.on("click", function(event) {
    event.preventDefault();
    gainBmi(event, gainAgeEl.val().trim(), gainWeightEl.val().trim(), gainHeightEl.val().trim())
    console.log(gainAgeEl.val())
    console.log(gainWeightEl.val())
    console.log(gainHeightEl.val())
    gainRecipes()
})

loseSubmit.on("click", function(event) {
    event.preventDefault();
    loseBmi(event, loseAgeEl.val().trim(), loseWeightEl.val().trim(), loseHeightEl.val().trim())
    loseRecipes()
})