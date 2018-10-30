function userValidation(){
	var isTrue=true;
	var fname=document.getElementById("name");
	var password=document.getElementById("password");

	if(fname.value=="")
	{
		document.getElementById("error0").innerHTML="Please enter the correct user name";
		isTrue=false;
	}
	else
	{
		document.getElementById("error0").innerHTML="";
	}
	if(password.value=="")
	{
		document.getElementById("error1").innerHTML="Please enter the correct password";
		isTrue=false;
	}
	else
	{
		document.getElementById("error1").innerHTML="";
	}
	if (isTrue==true)
	{
	 document.getElementById("loginForm").submit();
	}
	else
	{
		return false;
	}
}

/*function userValidation(userAction){

	var a=document.getElementById("name");
	var b=document.getElementById("password");
	var letter =/^[0-9a-zA-Z]+@/;

	if (a.value == "" && b.value =="" )
	{
		document.getElementById("error3").innerHTML="*Please Enter the correct Name and password";
		document.getElementById("error0").innerHTML="";
		document.getElementById("error1").innerHTML="";
		document.getElementById("error4").innerHTML="";
			//document.getElementById("error1").innerHTML="<h6>*Please Enter the correct Password </h6>";
			//document.getElementById('name').style.border ="1px solid red";
	}else if(!(a.value.match(letter)) && (a.value!=""))
	{
		document.getElementById("error4").innerHTML="Please input alphanumeric characters only";
		document.getElementById("error0").innerHTML="";
		document.getElementById("error3").innerHTML="";
		document.getElementById("error1").innerHTML="";
	}else if (a.value == "" && b.value!= "" )
		{
			document.getElementById("error0").innerHTML="*Please Enter the User name";
			//document.getElementById("name").style.borderColor="red";

			document.getElementById("error3").innerHTML="";
			document.getElementById("error1").innerHTML="";
			document.getElementById("error4").innerHTML="";
		}else if (a.value !="" && b.value=="")
		{
			document.getElementById("error1").innerHTML="*Please Enter the correct Password";
			document.getElementById("error3").innerHTML="";
			document.getElementById("error0").innerHTML="";
			document.getElementById("error4").innerHTML="";
		}else
	{
		//document.getElementById("error").innerHTML=" ";
	document.getElementById("loginForm").submit();
	}
return true;
} */


function registerRedirect()
{
	window.location.href="Register.html";
	return true;
}

function registerValidation()
{
	var isTrue = true;
	var a=document.getElementById("fname");
	var b=document.getElementById("lname");
	//var c=document.getElementById("female");
	//var c1=document.getElementById("male");
	var d=document.getElementById("Email");
	var e=document.getElementById("passwd1");
	var e1=document.getElementById("passwd2");

	//if (a.value=="" || b.value=="" || d.value=="" || e.value=="" || e1.value=="")
	//{
			if(a.value=="")
			{
				document.getElementById("fnameError").innerHTML="*please enter first name";
				isTrue = false;
			}else{
				document.getElementById("fnameError").innerHTML="";
			}
			if(b.value=="")
			{
				document.getElementById("lnameError").innerHTML="*Please enter the last name";
				isTrue = false;
			}else{
				document.getElementById("lnameError").innerHTML="";
			}
			if (d.value=="")
			{
				isTrue = false;
				document.getElementById("emailError").innerHTML="*Please enter valid mail id";
			}else{
				document.getElementById("emailError").innerHTML="";
			}
			if(e.value=="")
			{
				document.getElementById("passwd1Error").innerHTML="*Please enter the password";
				isTrue = false;
			}else{
				document.getElementById("passwd1Error").innerHTML="";
			}
			if(e1.value=="")
			{
				document.getElementById("passwd2Error").innerHTML="*Please re-enter the password";
				isTrue = false;
			}else{
				document.getElementById("passwd2Error").innerHTML="";
			}
			if(e.value.length >0 && e1.value.length >0 && e.value!=e1.value){
				document.getElementById("finalpassCheck").innerHTML="Password does not match";
				isTrue = false;
			}
			if(isTrue==true){
				document.getElementById("Registration form").submit();
				return true;
			}
		    else
			{
				return false;
			}	
} 

/* function empty(_input)


var input = _input;

if (input == null || input == "") {

 document.getElementById(input).focus;

alert("please enter");

document.getElementById(input).style.backgroundColor ="yellow"; }   */
