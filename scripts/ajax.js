// $(function() {


$('#btnLoadData').click(function() {
    console.log("clicked");

    //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

    let jsonURL = "demo.json";

    // let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(result) {
            //data = $.parseJSON(result);
            console.log(result);
            $.each(result, function(result) {
                $("#dataContainer").append(result + " ");
            });
        }
    });
});



// end of doc ready f/n
// });