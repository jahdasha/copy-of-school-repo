// ======================================================================================================================================
  $.getJSON('/all', function(data) {
    for (var i = 0; i<data.length; i++){
      //-------- fill in the blanks here
      //-------- fill in the blanks here
    }
  });
// ======================================================================================================================================
  $('#weightsort').on('click', function(){
    $('#results').empty();
    $('#results').append("<tr><th>Name</th><th>Num Legs</th><th>Class</th><th id='active'>Weight</th><th>But I'd Call It...</th></tr>");
    $.getJSON('/weight', function(data) {
      for (var i = 0; i<data.length; i++){
        //-------- fill in the blanks here
        //-------- fill in the blanks here
      }
    });
  });
// ======================================================================================================================================
  $('#namesort').on('click', function(){
    $('#results').empty();
    $('#results').append("<tr><th id='active'>Name</th><th>Num Legs</th><th>Class</th><th>Weight</th><th>But I'd Call It...</th></tr>");
    $.getJSON('/name', function(data) {
      for (var i = 0; i<data.length; i++){
        //-------- fill in the blanks here
        //-------- fill in the blanks here
      }
    });
  });
