// The 'groceries' variable, which stores an array of JSON objects
var groceries = [
    {
        category: "fruit",
        item: "Apples",
        type: "Honey Crisp",
        brand: "Little cuties",
        qty: 10
    },
    {
        category: "beverage",
        item: "Milk",
        type: "2%",
        brand: "Generic",
        qty: "1 Gallon"
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
        type: "Regular",
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

// The 'groceriesArray' variable, which creates an empty array
var groceriesArray = [];

//Declares a variable called 'i'
var i;

//Declares a variable called 'click', and defines it as 'true'
var click = true;

//Declares and begins definng the 'table' variable, which plays a Major role in constructing the 
//page
var table = "<div id='grocery-table'>";
// Places an h2 heading within the table variable, and then places an HTML table within the 
//table variable with a width of 100%
table += "<h2 id='grocery-table-head'>Grocery List</h2>";
table += "<br>";
table += "<table style='width:100%'>";

//creates the first row of the table: the heading, which identifies each individual column
table += "<tr id='top-row' style='text-align:center;'>";
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

table += "<th class='table-listing'>";
table += "<h1 style=display:none;></h1>";
table += "</th>";

table += "</tr>";

//begins a for loop designed to generate the other rows of the table.  The loop begins at 0,
//increases by one for each iteration, and concludes once it has reached the length of the groceries
//variable
for (i = 0; i < groceries.length; i++) {

    //gives each table row an individual ID
    table += "<tr id='rowID"+[i]+"'";

    //creates an if/else statement that activates for each iteration of the loop.  If the loop
    //starts with the 'click' variable set as true (which it always will in the beginning), 
    //then the 'table' variable gains a new row with a class of 'table-row1', and then sets
    //'click' to equal false.  Otherwise, the 'table' variable gains a new row listed with
    //a class of 'table-row2', and then sets 'click' to true.  According to the CSS, all rows
    //with a class of 'table-row1' will have a green background, while all rows with a class of
    //'table-row2' will have an orange background.
    if (click === true) {
        table += "class='table-row1' ";
        click = !true;
    }
    else {
        table += "class='table-row2' ";
        click = true;
    }
    table += ">";
    //Adds a 'td' tag that will be then used to create the columns with the SVG pictures, 
    //and the sets it to center aligned
    table += "<td style='text-align: center;'>";

    //Begins a series of if and else if statements used to automatically generate the correct
    //SVG picture for the corresponding entry.  For instance, if the value of the 'groceries'
    //variable's 'category' propery equals 'fruit,' then the code will use the SVG 'fruit' 
    //image.  It will also create a figcaption tag with the appropriate caption for that image
    if (groceries[i].category === "fruit") {
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/fruit.svg'>";
        table += "<figcaption style='display: none;'>Created by Adrien Coquet from the Noun Project</figcaption>";
        table += "</figure>";
    }
    else if (groceries[i].category === "pasta") {
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/pasta.svg'>";
        table += "<figcaption style='display: none;'>Created by sahua d</figcaption>";
        table += "</figure>";
    }
    else if (groceries[i].category === "beverage") {
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/beverage.svg'>";
        table += "<figcaption style='display: none;'>Created by Eucalyp</figcaption>";
        table += "</figure>";
    }
    else if (groceries[i].category === "dairy") {
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/dairy.svg'>";
        table += "<figcaption style='display: none;'>Created by Becris</figcaption>";
        table += "</figure>";
    }
    else if (groceries[i].category === "dessert") {
        table += "<figure>";
        table += "<img class='svg-pic' src='assets/images/cake.svg'>";
        table += "<figcaption style='display: none;'>Created by Made from the Noun Project</figcaption>";
        table += "</figure>";
    }
    //closes the td element that houses the SVG images that are generated
    table += "</td>";

    //creates a new column for each loop, listing the value of 'groceries.item'
    table += "<td style='text-align: center;'>";
    table += "<h4 class='general-text'>" + groceries[i].item + "</h4>";
    table += "</td>";

    //creates a new column for each loop, listing the value of 'groceries.type'
    table += "<td style='text-align: center;'>";
    table += "<h4 class='general-text'>" + groceries[i].type + "</h4>";
    table += "</td>";

    //creates a new column for each loop, listing the value of 'groceries.brand'
    table += "<td style='text-align: center;'>";
    table += "<h4 class='general-text'>" + groceries[i].brand + "</h4>";
    table += "</td>";

    //creates a new column for each loop, listing the value of 'groceries.qty'    
    table += "<td style='text-align: center;'>";
    table += "<h4 class='general-text'>" + groceries[i].qty + "</h4>";
    table += "</td>";

    //creates a new column for each loop, creating a check mark button'    
    table += "<td style='text-align: center;'>";
    table += "<button id=check-mark" + [i] + " class='general-text'>&#9989;</button>";
    table += "</td>";

    //closes the tr element and end the row
    table += "</tr>";
}

//instructs the code to set the HTML for the div with an ID of 'demo' and set it to being equal
//to the value of the 'table' variable
document.getElementById("demo").innerHTML = table;

//a series of jQuery instructions, telling the code that, when a particular check mark button is 
//clicked on by the user, the class of "delete" should then be added to that row.  Because the delete
//class is set to "display: none;", the row will then stop displaying, effectively removing it
//from the list
$("#check-mark0").click(function () {
    $("#rowID0").addClass("delete");
});

$("#check-mark1").click(function () {
    $("#rowID1").addClass("delete");
});

$("#check-mark2").click(function () {
    $("#rowID2").addClass("delete");
});

$("#check-mark3").click(function () {
    $("#rowID3").addClass("delete");
});

$("#check-mark4").click(function () {
    $("#rowID4").addClass("delete");
});

$("#check-mark5").click(function () {
    $("#rowID5").addClass("delete");
});

$("#check-mark6").click(function () {
    $("#rowID6").addClass("delete");
});

$("#check-mark7").click(function () {
    $("#rowID7").addClass("delete");
});