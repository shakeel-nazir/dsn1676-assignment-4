//Object: avariable that contains other variables 
var blueberries = {
    fruit: "Blueberries",
    energy: 240,
    carbohydrates: 14.49,
    grows: true,
    latio:"Vaccinium Corymbosum",
    protein: 0.74
};

var grapes = {
    fruit: "Grapes",
    energy: 288,
    carbohydrates: 18.1,
    grows: false,
    latio:"Vitis Vinifera",
    protein: 0.72
};


var redCurrant = {
    fruit: "Red Currant",
    energy: 234,
    carbohydrates: 13.8,
    grows: true,
    latio:"Ribes Rubrum",
    protein: 1.4
};



var writeFruit = function (fruits) { 
    
    document.write("<dl>");
    
    document.write("<h1>" + fruits.fruit + "</h1>");
    
    document.write("<dt> Latin </dt>");
    
    document.write("<dl>" + fruits.latio + "</dl>");
    
    document.write("<dt> Grows on shrub </dt>");
    
    document.write("<dd>" + fruits.grows + "</dd>");
    
    document.write("<dt> Energy </dt>");
    
    document.write("<dd>" + fruits.energy + " KJ</dd>");
    
    document.write("<dt> Carbohydrates </dt>");
    
    document.write("<dd>" + fruits.carbohydrates + " G</dd>");
    
    document.write("<dt> Protein </dt>");
    
    document.write("<dd>" + fruits.protein + " G</dd>");
    
    document.write("</dl>");

};

var allFruit = [blueberries, grapes, redCurrant];
allFruit.forEach(writeFruit)



