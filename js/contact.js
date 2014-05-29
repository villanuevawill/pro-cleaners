$(function(){

$('#contact').bootstrapValidator({
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required and cannot be empty'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            }
        },
        submitHandler: function(validator, form, submitButton) {

			var params = {
			type: "POST",
			url: "process.php",
			data: $("#contact").serialize(),
			dataType: "json",
			success: function(response) {
			  $('.text').css('display','none');
			  $('#contact').css('display','none');
			  $('#footer').css('display','none');
			  var storage = {};
			  $.each(response, function(key,value) {
                  storage[key]=value; 
                           });
			  var html = '<h3 class=confirmation> Thank you ' + storage.firstName + ' ' + storage.lastName + ', we will be in contact soon! </h3>';
              $('#success').append(html);

                    
              }  
			};
			$.ajax(params);
        }
    });



});