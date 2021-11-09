//our shorthand doc ready function
//currently everything is nested in here 
//todo: define functions and put them outside of this, then only call them from in here. 
$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;

  //my array of petNames
  //its a nested array, meaning, item 0 "cat" has an array in the item
  //this is used for the "dependent inputs" in example #5
  let petNames = [
    ["cat", ["Jonas", "Salvador", "Cheezer", "Captain Fluffy"]],
    ["dog", ["Earl", "Pop Tart", "Dawg"]],
    ["mouse", ["Squeakers"]],
    ["hampster", ["Fluffz", "Chubbz"]],
    ["kuola", ["Wally", "Princess Pickles"]],
    ["frog", ["Dennis Hopper", "Frank"]],
    ["bear", ["Barry"]]
  ];

  //example #1 code: ensures no spaces on blur
  //blur = when user clicks out of that DOM element (in this case it is a text input)
  $("#noSpaces").blur(function () {
    //first grab the value from the textbox and put in a variable
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    //found this online, initialize a variable to count number of spaces in a string
    //takes the variable of the input and runs the split() method
    //which is an array method to chop it up whenever it finds the search parameter, in the case a space (" ")
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().text("no spaces allowed in User Name");
    }
  });

  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("remember, no alpha!");
  });

  $("#noNumbers").on("input", function () {
    let inputVal = $(this).val();

    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
    }
  });

  //TODO: key down not working, need immediate change?
  $("#noNumbersDown").keydown(function (e) {
    let inputVal = $(this).val();

    // test input value against regular expression
    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
    }
  });

  //when user selects species of pet...load in names from array
  $("#petKind").on("change", function (e) {
    //enables the pet name dropdown
    $("#petName").prop("disabled", false);

    let inputVal = this.value;

    // console.log(inputVal);

    //loop though array of pet names
    $.each(petNames, function (key, value) {
      //match pet name to user selected
      if (inputVal === value[0]) {
        // console.log(value[0] + key + value);
        $.each(value, function (nestKey, nestValue) {
          // console.log(nestKey);

          switch (nestKey) {
            case 0:
              $("label[for=petName]").text(nestValue);
              $("#petName").empty();
              $("#petName").append(
                $("<option>").text(`select a ${nestValue} `)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#petName").append(
                  $("<option>").val(nameValue).text(nameValue)
                );
              });
              break;
          }
        });
      }
    });
  });

  $('#submitButton').click(function () {

    if ($('#noSpaces').val()) {
      console.log("there is something in this text box");
      $('#noSpaces').removeClass("error")
    } else {
      console.log("there is NOTHING in this text box");
      $('#noSpaces').removeClass("success").addClass("error").focus();
      //bring focus to it
      //change the placeholder text 
    }
  });


  //button to load in JSON object
  //example: https://www.w3schools.com/jquery/ajax_getjson.asp
  $('#btnLoad').on('click', function () {
      
    console.log('in this load click event');

    //a) load in JSON data
    // $.getJSON("../demo.json", function(result){
    //   $.each(result, function(i, field){
    //     $("div").append(field + " ");
    //   });

    });


    //b) show it. 

    //c) put it in the correct form spots. 


  });




  // end of doc ready f/n
});

// some more code to steal...
// div class="container">
//   <input type='text' id='name' placeholder='Enter your name'><br/><br/>
//   <input type='text' id='age' placeholder='Enter your age'>
// </div>

// <!-- Script -->
// <script>
// $(document).ready(function(){
//   $("#age").keypress(function(e){
//     var keyCode = e.which;
//     /*
//     8 - (backspace)
//     32 - (space)
//     48-57 - (0-9)Numbers
//     */
//     if ( (keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57)) {
//       return false;
//     }
//   });

//   $("#name").keypress(function(e){
//     var keyCode = e.which;

//     /*
//     48-57 - (0-9)Numbers
//     65-90 - (A-Z)
//     97-122 - (a-z)
//     8 - (backspace)
//     32 - (space)
//     */
//     // Not allow special
//     if ( !( (keyCode >= 48 && keyCode <= 57)
//       ||(keyCode >= 65 && keyCode <= 90)
//       || (keyCode >= 97 && keyCode <= 122) )
//       && keyCode != 8 && keyCode != 32) {
//       e.preventDefault();
//     }
//   });
// });
// </script>