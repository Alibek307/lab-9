$(document).ready(function(){
	$(".register").hide();
	$(".login_li").addClass("active");

	$(".login_li").click(function(){
		$(this).addClass("active")
		$(".register_li").removeClass("active");
		$(".login").show();
		$(".register").hide();
		anime({
		targets:'.login_li', 
		translateX: [0, 130],
		duration: 2000,
		direction: 'alternate',
		loop: false
		})
		anime({
		targets:'.register_li', 
		translateX: [0, -110],
		direction: 'alternate',
		loop: false
		})
	});

	$(".register_li").click(function(){
		$(this).addClass("active")
		$(".login_li").removeClass("active");
		$(".register").show();
		$(".login").hide();
		anime({
		targets:'.register_li', 
		translateX: [-110, 0],
		direction: 'alternate',
		loop: false
		})
		anime({
		targets:'.login_li', 
		translateX: [130, 0],
		direction: 'alternate',
		loop: false
		})
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
