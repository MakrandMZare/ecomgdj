$(document).ready(function(){

  $('#create').on('click', function(){
    $firstname = $('#firstname').val();
    $lastname = $('#lastname').val();
    $email = $('#email').val();
    $mobile = $('#mobile').val();
    
    if($firstname == "" || $mobile == ""){
      alert("Please complete the required field.")
    }else{
      $.ajax({
        url: 'create/',
        type: 'POST',
        data: {
          firstname: $firstname,
          lastname: $lastname,
          email: $email,
          mobile: $mobile,
          csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function({
          Read();
          $('#firstname').val('');
          $('#lastname').val('');
          $('#email').val('');
          $('#mobile').val('');
          alert("New member Successfully Added.");
        })
      })
    }
  });
});

function Read(){
  $.ajax({
    url: 'read/',
    type: 'POST',
    async: false,
    data:{
      res: 1,
      csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
    },
    success: function(response){
      $('#result').html(response);
    }
  });
}