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
 var database = firebase.database().ref('messages');

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


  
const PERCENT_FOR_MAX = 95;
var percentagesPerWeek = [
  {
    deadlift: 75,
    deadliftReps: [' - 3x5'],
    deficitDead: 60,
    deficitDeadReps: [' - 8x3'],
    frontSquat: 60,
    frontSquatReps: [' - 3x10'],
    auxillary: [
      'Stiff Leg Deadlift - 3x8',
      'Bent Over Row - 3x8',
      'Lat Pulldown - 3x12'
    ]
  },
  {
    deadlift: 80,
    deadliftReps: [' - 3x5'],
    deficitDead: 65,
    deficitDeadReps: [' - 8x3'],
    frontSquat: 65,
    frontSquatReps: [' - 3x10'],
    auxillary: [
      'Stiff Leg Deadlift - 3x8',
      'Bent Over Row - 3x8',
      'Lat Pulldown - 3x12'
    ]
  },
  {
    deadlift: 85,
    deadliftReps: [' - 3x5'],
    deficitDead: 70,
    deficitDeadReps: [' - 8x3'],
    frontSquat: 70,
    frontSquatReps: [' - 3x10'],
    auxillary: [
      'Stiff Leg Deadlift - 3x8',
      'Bent Over Row - 3x8',
      'Lat Pulldown - 3x12'
    ]
  },
  {
    deadlift: 90,
    deadliftReps: [' - 3x3'],
    deficitDead: 75,
    deficitDeadReps: [' - 5x3'],
    frontSquat: 75,
    frontSquatReps: [' - 3x8'],
    auxillary: [
      'Stiff Leg Deadlift - 3x8',
      'Bent Over Row - 3x8',
      'Lat Pulldown - 3x12'
    ]
  },
  {
    deadlift: 75,
    deadliftReps: [' - 3x3'],
    deficitDead: 65,
    deficitDeadReps: [' - 4x3'],
    frontSquat: 65,
    frontSquatReps: [' - 3x5'],
    auxillary: [
      'Stiff Leg Deadlift - 2x8',
      'Bent Over Row - 2x8',
      'Lat Pulldown - 3x8',
      '(Deload Week)'
    ]
  },
  {
    deadlift: 85,
    deadliftReps: [' - 3x3'],
    blockPulls: 90,
    blockPullsReps: [' - 4x3'],
    frontSquat: 80,
    frontSquatReps: [' - 3x5'],
    auxillary: [
      'Stiff Leg Deadlift - 2x8',
      'Bent Over Row - 2x8',
      'Lat Pulldown - 3x12',
      
    ]
  },
  {
    deadlift: 85,
    deadliftReps: [' - 3x3'],
    blockPulls: 95,
    blockPullsReps: [' - 4x3'],
    frontSquat: 85,
    frontSquatReps: [' - 3x5'],
    auxillary: [
      'Stiff Leg Deadlift - 2x8',
      'Bent Over Row - 2x8',
      'Lat Pulldown - 3x12',
      
    ]
  },
  {
    deadlift: 90,
    deadliftReps: [' - 2x2'],
    blockPulls: 100,
    blockPullsReps: [' - 3x3'],
    frontSquat: 90,
    frontSquatReps: [' - 3x3'],
    auxillary: [
      'Stiff Leg Deadlift - 2x8',
      'Bent Over Row - 2x8',
      'Lat Pulldown - 3x12',
      
    ]
  },
  {
    deadlift: 95,
    deadliftReps: [' - 2x2'],
    blockPulls: 105,
    blockPullsReps: [' - 3x3'],
    frontSquat: 95,
    frontSquatReps: [' - 3x2'],
    auxillary: [
      'Stiff Leg Deadlift - 2x8',
      'Bent Over Row - 2x8',
      'Lat Pulldown - 3x12',
      
    ]
  },
  {
    deadlift: 60,
    deadliftReps: [' - 3x3'],
    frontSquat: 60,
    frontSquatReps: [' - 3x5'],
    auxillary: [
      'Stiff Leg Deadlift - 2x8',
      'Bent Over Row - 2x8',
      'Lat Pulldown - 3x8',
      'Deload Week/Resting for new max attempt'
      
    ]
  },
  {
    deadlift: 110,
    deadliftReps: [' - 1x1'],
    auxillary: [
      'New Max attempt!! You got this!!',
     
      
    ]
  },
 
];

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
// training max and css
function setMax() {
  dlMax = $('#dlcurrentmax-input').val().trim();
  ftsqMax = $('#ftsqcurrentmax-input').val().trim();
  per = 95;
  dlTrainingMax = (dlMax * per) / 100;
  frsqTrainingMax = (ftsqMax * per) / 100;
  var roundedNumberDl = Math.floor(dlTrainingMax);
  var roundedNumberSq = Math.floor(frsqTrainingMax);
  var newDiv = $('<div>');
  newDiv.addClass('workingmaxes');
  newDiv.html('<h2>10 Week Training Routine ' +
   '<br/><h3>Deadlift Training Max(95% of max): ' +
   roundedNumberDl + ' <br/>Front Squat Training Max(95% of max): ' + roundedNumberSq) ;
  $('#program').css({'color': 'rgb(255, 255, 255)',
      'padding': '2rem 1rem' ,
      'margin-bottom': '2rem',
      'border-radius': '0.3rem',
      'background': '#000064', 
      'background': '-webkit-linear-gradient(to right, #1BADD8, #00003E)', 
      'background': 'linear-gradient(to right, #1BADD8, #00003E)'});
  
  $('#program').append(newDiv); 
}
// weekly workouts
function createWorkout() {
  for(var i = 0, j = 0; i < percentagesPerWeek.length && j < 11; i++, j++){
    dlMax = $('#dlcurrentmax-input').val().trim();
    ftsqMax = $('#ftsqcurrentmax-input').val().trim();
    dlTrainingMax = (dlMax * PERCENT_FOR_MAX) / 100;
    frsqTrainingMax = (ftsqMax * PERCENT_FOR_MAX) / 100;
    var deadliftPercent = percentagesPerWeek[i].deadlift;
    var weekDl = (dlTrainingMax * deadliftPercent) / 100;
    var rnWeekDl = Math.floor(weekDl);
    var dlReps = percentagesPerWeek[i].deadliftReps;
    var defictDeadPercent = percentagesPerWeek[i].deficitDead;
    var weekDef = (dlTrainingMax * defictDeadPercent) / 100;
    var rnDefWeek = Math.floor(weekDef);
    var dlDefReps = percentagesPerWeek[i].deficitDeadReps;
    var blockPullPercent = percentagesPerWeek[i].blockPulls;
    var weekBlockPulls = (dlTrainingMax * blockPullPercent) / 100;
    var rnBlockPullsWeek = Math.floor(weekBlockPulls);
    var bpRep = percentagesPerWeek[i].blockPullsReps;
    var frontSquatPercent = percentagesPerWeek[i].frontSquat;
    var weekSq = (frsqTrainingMax * frontSquatPercent) / 100;
    var rnWeekSq = Math.floor(weekSq);
    var fnsqReps = percentagesPerWeek[i].frontSquatReps;
    var newDivOne = $('<div>');
    var newDivTwo = $('<div>');
    var auxData = '';
    
    
    if(percentagesPerWeek[i].auxillary) {
     
      auxData =  percentagesPerWeek[i].auxillary.reduce((htmlStr,auxlift) => {
          return htmlStr + '<br/>' + auxlift;
      }, '');
    }
    
    newDivOne.addClass('trainingProgram');
    newDivTwo.addClass('trainingProgram');
    if(j < 5){
    newDivOne.html('<h3>Week ' + (j + 1));
    newDivTwo.html(
      'Deadlift('+deadliftPercent+'%): at ' + rnWeekDl +   dlReps +
      '<br/>Deficit Deadlift('+defictDeadPercent+'%): at ' + rnDefWeek + dlDefReps +
      '<br/>Front Squat('+frontSquatPercent+'%): at ' + rnWeekSq + fnsqReps +
      auxData
    );
  }
  else if(j < 9){
    newDivOne.html('<h3>Week ' + (j + 1));
    newDivTwo.html(
      'Deadlift('+deadliftPercent+'%): at ' + rnWeekDl +   dlReps +
      '<br/>Block Pull('+blockPullPercent+'%): at ' + rnBlockPullsWeek + bpRep +
      '<br/>Front Squat('+frontSquatPercent+'%): at ' + rnWeekSq + fnsqReps +
      auxData
    );
  }
  else if(j < 10){
    newDivOne.html('<h3>Week ' + (j + 1));
    newDivTwo.html(
      'Deadlift('+deadliftPercent+'%): at ' + rnWeekDl +   dlReps +
      '<br/>Front Squat('+frontSquatPercent+'%): at ' + rnWeekSq + fnsqReps +
      auxData
    );
  
  }
  else{
    newDivOne.html('<h3>Week ' + (j + 1));
    newDivTwo.html(
      'Deadlift('+deadliftPercent+'%): at ' + rnWeekDl +   dlReps +
      auxData
    );
  };
    $('#program').append(newDivOne);
    $('#program').append(newDivTwo);
  }
}
// starts functions calls them
$('#addmaxes').on('click',function(){
  $('#program').empty();
  setMax();
  createWorkout();
});

//Contact form to firebase
$("#contact-form").submit(function(config) { $(this), console.log("Submit to Firebase");
var c = $("#form_name").val().trim(),
    d = $("#form_lastname").val().trim(),
    e = $("#form_email").val().trim(),
    f = $("#form_message").val().trim(),
    g = { firstname: c, lastname: d, email: e, message: f};
return database.push(g)
});  
  });

