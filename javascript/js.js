var studentName = "Simran";
var allStudents = ["Simran, Daniella, Reianna, Summer"]
var x = 10;
var i = 0;
var j = 0;


console.log("hi")
console.log(studentName)
console.log(x)
console.log(allStudents)


if(x == 10){
    console.log("X IS TEN")
}
else{
    console.log("X IS NOT TEN")
}

while (i < 100){
    //do this
    console.log("I IS LESS THAN 10")
    i = i +1;

}


while (j < allStudents.length){
    $("<div></div>").addClass("student")
    .html(allStudents[j])
    .appendTo("body")
    j = j + 1;
}


$(document).scroll(function(){
    $("<div></div>").addClass("fixed")
    .appendTo("body")
    .html("GD2")
})




$(document).on("mousemoves").function