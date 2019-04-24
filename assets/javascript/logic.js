var groceries = [
    {
        category: "fruit",
        item: "apples",
        type: "Honey Crisp",
        brand: "Little cuties",
        qty: 10
    },
    {
        category: "beverage",
        item: "milk",
        type: "2%",
        brand: "generic",
        qty: "1 gallon"
    },
    {
        category: "pasta",
        item: "Pasta",
        type: "Penne",
        brand: "Barilla",
        qty: 3
    },
    {
        category: "dessert",
        item: "Gelatin dessert",
        type: "Green",
        brand: "Jello",
        qty: 3
    },
    {
        category: "dairy",
        item: "Yogurt",
        type: "Assorted flavors",
        brand: "Chobani",
        qty: 12
    },
    {
        category: "pasta",
        item: "Pasta",
        type: "Linguini",
        brand: "Barilla",
        qty: 3
    },
    {
        category: "beverage",
        item: "Apple juice",
        type: "regular",
        brand: "Happy Farms",
        qty: 2
    },
    {
        category: "beverage",
        item: "Vodka",
        type: "Tangerine",
        brand: "Grey Goose",
        qty: 1
    }
]

var groceriesArray = [];

var i;

var click = true;

var table = "<div id='grocery-table'>";
table += "<h2 id='grocery-table-head'>Grocery Table</h2>";
table += "<br>";
table += "<table style='width:100%'>";

table += "<tr>";
table += "<th class='table-listing'>";
table += "Category";
table += "</th>";

table += "<th class='table-listing'>";
table += "Item";
table += "</th>";

table += "<th class='table-listing'>";
table += "Type";
table += "</th>";

table += "<th class='table-listing'>";
table += "Brand";
table += "</th>";

table += "<th class='table-listing'>";
table += "Quantity";
table += "</th>";

table += "</tr>";

for(i=0;i<groceries.length;i++){

    if (click === true){
        table += "<tr class='table-row1'>";
        click = !true;
    }
    else {
        table += "<tr class='table-row2'>";
        click = true;
    }

    table += "<td style='text-align: center;'>";

    if (groceries[i].category === "fruit"){
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/fruit.svg'>";
        table += "<figcaption style='display: none;'>Created by Adrien Coquet from the Noun Project</figcaption>";
        table += "</figure>";

    }
    else if (groceries[i].category === "pasta"){
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/pasta.svg'>";
        table += "<figcaption style='display: none;'>Created by sahua d</figcaption>";
        table += "</figure>";
    }
    else if (groceries[i].category === "beverage"){
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/beverage.svg'>";
        table += "<figcaption style='display: none;'>Created by Eucalyp</figcaption>";
        table += "</figure>";
    }
    else if (groceries[i].category === "dairy"){
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/dairy.svg'>";
        table += "<figcaption style='display: none;'>Created by Becris</figcaption>";
        table += "</figure>";
    }
    else if (groceries[i].category === "dessert"){
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/cake.svg'>";
        table += "<figcaption style='display: none;'>Created by Made from the Noun Project</figcaption>";
        table += "</figure>";
    }
    table += "</td>";
    

    table += "<td style='text-align: center;'>";
    table += "<h4 class='general-text'>" + groceries[i].item + "</h4>";
    table += "</td>";

    table += "<td style='text-align: center;'>";
    table += "<h4 class='general-text'>" + groceries[i].type + "</h4>";
    table += "</td>";

    table += "<td style='text-align: center;'>";
    table += "<h4 class='general-text'>" + groceries[i].brand + "</h4>";
    table += "</td>";

    table += "<td style='text-align: center;'>";
    table += "<h4 class='general-text'>" + groceries[i].qty + "</h4>";
    table += "</td>";

    table += "</tr>";

}

document.getElementById("demo").innerHTML = table;
