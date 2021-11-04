$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;

  let petNames = [
    ["cat", ["Jonas", "Salvador", "Cheezer", "Captain Fluffy"]],
    ["dog", ["Earl", "Pop Tart", "Dawg"]],
    ["mouse", ["Squeakers"]],
    ["hampster", ["Fluffz", "Chubbz"]],
    ["kuola", ["Wally", "Princess Pickles"]],
    ["frog", ["Dennis Hopper", "Frank"]],
    ["bear", ["Barry"]]
  ];

  $("#noSpaces").blur(function () {
    let inputVal = $(this).val();
    let strSpace = " ";
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

  console.log("user name: " + $("#noSpaces").val());

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