$(document).ready(function(){

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBXxGDmEmlKxhH1w9A-iMoXe-bpoklLTOk",
    authDomain: "deadlift-app.firebaseapp.com",
    databaseURL: "https://deadlift-app.firebaseio.com",
    projectId: "deadlift-app",
    storageBucket: "deadlift-app.appspot.com",
    messagingSenderId: "673057261730"
  };
  firebase.initializeApp(config);
  //Reference database
  database = firebase.database();

//global variables

//Max and Training Max Var
var dlMax = 0;
var ftsqMax = 0;
var frsqTrainingMax = 0;
var dlTrainingMax = 0;
//percentage var
var per = 0;
var per2 = 0;
var per3 = 0;

//functions
//only allow numbers in the input form
$("#deadliftsquat-form").keydown(function (e) {
// Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
         // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
         // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             // let it happen, don't do anything
             return;
}
// Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)){
        e.preventDefault();
        
    }   
});

//allow enter as a submit click
$(document).bind('keypress', function(e) {
    if(e.keyCode==13){
         $('#addmaxes').trigger('click');
          
    }
});



//squat and deadlift training percentages
$('#addmaxes').on('click',function(){
    $('#program').empty();
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    var roundedNumberDl = Math.floor(dlTrainingMax);
    var roundedNumberSq = Math.floor(frsqTrainingMax);
    var newDiv = $('<div>');
    newDiv.addClass('workingmaxes');
    newDiv.html('<h3>Deadlift Training Max(95% of max): ' + roundedNumberDl + ' <br/>Front Squat Training Max(95% of max): ' + roundedNumberSq) ;
    $('#program').append(newDiv); 
        
});   

//week 1
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 75;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per2= 60;
    var weekDef = (dlTrainingMax * per2) / 100;
    var rnDefWeek = Math.floor(weekDef);
    var weekSq = (frsqTrainingMax * per2) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 1');
    newDivTwo.html('Deadlift (75%): 3x5 at ' + rnWeekDl + '<br/>Deficit Deadlift (60%): 8x3(90sec rest between sets) at ' + rnDefWeek + '<br/>Front Squat (60%): 3x8 at ' + rnWeekSq + '<br/>Stiff-leg deadlift: 3x8 ' + '<br/>Bent over rows: 3x8' + '<br/>Lat pulldowns:  3x12');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
   

}); 

//week 2
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 80;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per2= 65;
    var weekDef = (dlTrainingMax * per2) / 100;
    var rnDefWeek = Math.floor(weekDef);
    var weekSq = (frsqTrainingMax * per2) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 2');
    newDivTwo.html('Deadlift (80%): 3x5 at ' + rnWeekDl + '<br/>Deficit Deadlift (65%): 8x3(90sec rest between sets) at ' + rnDefWeek + '<br/>Front Squat (65%): 3x8 at ' + rnWeekSq + '<br/>Stiff-leg deadlift: 3x8 ' + '<br/>Bent over rows: 3x8' + '<br/>Lat pulldowns:  3x12');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
    ; 
    
}); 

//week 3
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 85;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per2= 70;
    var weekDef = (dlTrainingMax * per2) / 100;
    var rnDefWeek = Math.floor(weekDef);
    var weekSq = (frsqTrainingMax * per2) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 3');
    newDivTwo.html('Deadlift (85%): 3x5 at ' + rnWeekDl + '<br/>Deficit Deadlift (70%): 8x3(90sec rest between sets) at ' + rnDefWeek + '<br/>Front Squat (70%): 3x8 at ' + rnWeekSq + '<br/>Stiff-leg deadlift: 3x8 ' + '<br/>Bent over rows: 3x8' + '<br/>Lat pulldowns:  3x12');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
     
    
}); 

//week 4
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 90;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per2= 75;
    var weekDef = (dlTrainingMax * per2) / 100;
    var rnDefWeek = Math.floor(weekDef);
    var weekSq = (frsqTrainingMax * per2) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 4');
    newDivTwo.html('Deadlift (90%): 3x3 at ' + rnWeekDl + '<br/>Deficit Deadlift (75%): 4x5 at ' + rnDefWeek + '<br/>Front Squat (75%): 3x8 at ' + rnWeekSq + '<br/>Stiff-leg deadlift: 3x8 ' + '<br/>Bent over rows: 3x8' + '<br/>Lat pulldowns:  3x12');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
    
    
}); 

//week 5
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 80;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per2= 65;
    var weekDef = (dlTrainingMax * per2) / 100;
    var rnDefWeek = Math.floor(weekDef);
    var weekSq = (frsqTrainingMax * per2) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 5');
    newDivTwo.html('Deadlift (80%): 3x5 at ' + rnWeekDl + '<br/>Deficit Deadlift (65%): 3x5 at ' + rnDefWeek + '<br/>Front Squat (65%): 3x8 at ' + rnWeekSq + '<br/>Stiff-leg deadlift: 3x8 ' + '<br/>Bent over rows: 3x8' + '<br/>Lat pulldowns:  3x12');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
     
    
}); 
          
//week 6
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 85;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per2= 90;
    var weekDef = (dlTrainingMax * per2) / 100;
    var rnDefWeek = Math.floor(weekDef);
    per3= 80;
    var weekSq = (frsqTrainingMax * per3) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 6');
    newDivTwo.html('Deadlift (85%): 3x5 at ' + rnWeekDl + '<br/>Block Pulls (90%): 3x3 at ' + rnDefWeek + '<br/>Front Squat (70%): 3x8 at ' + rnWeekSq + '<br/>Stiff-leg deadlift: 3x8 ' + '<br/>Bent over rows: 3x8' + '<br/>Pull ups or chin ups: 25 total');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
    
}); 

//week 7
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 90;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per2= 95;
    var weekDef = (dlTrainingMax * per2) / 100;
    var rnDefWeek = Math.floor(weekDef);
    per3= 80;
    var weekSq = (frsqTrainingMax * per3) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 7');
    newDivTwo.html('Deadlift (90%): 2x2 at ' + rnWeekDl + '<br/>Block Pulls (95%): 3x3 at ' + rnDefWeek + '<br/>Front Squat (80%): 3x8 at ' + rnWeekSq + '<br/>Stiff-leg deadlift: 3x8 ' + '<br/>Bent over rows: 3x8' + '<br/>Pull ups or chin ups: 25 total');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
    
    
}); 

//week 8
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 95;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per2= 100;
    var weekDef = (dlTrainingMax * per2) / 100;
    var rnDefWeek = Math.floor(weekDef);
    per3= 85;
    var weekSq = (frsqTrainingMax * per3) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 8');
    newDivTwo.html('Deadlift (95%): 1x2 at ' + rnWeekDl + '<br/>Block Pulls (100%): 3x3 at ' + rnDefWeek + '<br/>Front Squat (85%): 3x5 at ' + rnWeekSq + '<br/>Bent over rows: 3x8' + '<br/>Pull ups or chin ups: 25 total');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
   
    
}); 

//week 9
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 100;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per3= 90;
    var weekSq = (frsqTrainingMax * per3) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 9');
    newDivTwo.html('Deadlift (100%): 1x2 at ' + rnWeekDl + '<br/>Front Squat (90%): 3x3 at ' + rnWeekSq + '<br/>Stiff-leg deadlift: 3x8 ' + '<br/>Bent over rows: 3x8' + '<br/>Pull ups or chin ups: 25 total');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
     
    
}); 

//week 10
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 95;
    dlTrainingMax = (dlMax * per) / 100;
    frsqTrainingMax = (ftsqMax * per) / 100;
    per= 60;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    per3= 95;
    var weekSq = (frsqTrainingMax * per3) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 10');
    newDivTwo.html('Deadlift (60%): 3x3 at ' + rnWeekDl + '<br/>Front Squat (95%): 3x3 at ' + rnWeekSq + '<br/>Bent over rows: 3x8' + '<br/>Pull ups or chin ups: 25 total');
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
    
    
}); 

//week 11
$('#addmaxes').on('click',function(){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    per = 103;
    dlTrainingMax = (dlMax * per) / 100;
    var weekDl = (dlTrainingMax * per) / 100;
    var rnWeekDl = Math.floor(weekDl);
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    newDivOne.html('<h3>Week 11');
    newDivTwo.html('Deadlift (103%):Your new max at ' + rnWeekDl);
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
    
    
}); 


























});

