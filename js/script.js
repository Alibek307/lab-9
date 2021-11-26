$(document).ready(function(){
	$(".register").hide();
	$(".login_li").addClass("active");

	$(".login_li").click(function(){
		$(this).addClass("active")
		$(".register_li").removeClass("active");
		$(".login").show();
		$(".register").hide();
	});

	$(".register_li").click(function(){
		$(this).addClass("active")
		$(".login_li").removeClass("active");
		$(".register").show();
		$(".login").hide();
	});
});

function togglePassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function togglePassword1() {
  var x = document.getElementById("password1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
$(function(){
	var $registerForm = $("form");
	if($registerForm.length){
		$registerForm.validate({
			rules:{
				username:{
					required: true
			}
		},
		messages:{
			username:{
				required: 'Username is not valid'
			}
		}
		})
	}
})
