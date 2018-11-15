/*function Validate(){
 
 
	 if( place[0] == "" )
	 {
	 	document.getElementById("demo").innerHTML="Please select any option";
	 }
	 else{

	 	 	document.getElementById("error1").innerHTML="";
	 	}
	 //else
	// {
	 	//form.submit();
	 //} 
}*/
 function validate()
 {
var radioval = $('input[name="place"]:checked');
var radioval1 = $('input[name="College"]:checked');
var radioval2 = $('input[name="Temples"]:checked');
var radioval3 = $('input[name="university"]:checked');
var radioval4 = $('input[name="headquarter"]:checked');
var wrong=0;
var correct=0;
var Score=0;
var imgArray =["A_Grade.jpg","excellent.jpg","Fail.jpeg","Verygood.jpeg","workhard.jpg"];
		if(radioval.length == 0 )
		 {
		 	$("#error1").text("Please select value").css('color','red').css('font-size','small');
		  }
		  else 
		 {
		 	$("#error1").text(" ");
		 	 
			if(radioval.val() == "Hyderabad" )
			{
					
				$('#paty').css("backgroundColor","yellow");
				$('#Jaipur').css("backgroundColor","white");
				$('#Patna').css("backgroundColor","white");
				$('#New Delhi').css("backgroundColor","white");
				correct ++;
			}
			if(radioval.val()=="Jaipur") //|| radioval.val()=="Patna" || radioval.val()=="New Delhi")
			{
				$('#paty').css("backgroundColor","yellow");
				$('#Jaipur').css("backgroundColor","red");
				$('#Patna').css("backgroundColor","white");
				$('#New Delhi').css("backgroundColor","white");
				wrong++;
			}
			if(radioval.val()=="Patna"){

				$('#paty').css("backgroundColor","yellow");
				$('#Jaipur').css("backgroundColor","white");
				$('#Patna').css("backgroundColor","red");
				$('#New Delhi').css("backgroundColor","white");
				wrong++;
			}if(radioval.val()=="New Delhi"){

				$('#paty').css("backgroundColor","yellow");
				$('#Jaipur').css("backgroundColor","white");
				$('#Patna').css("backgroundColor","white");
				$('#New Delhi').css("backgroundColor","red");
				wrong++;
			}

		 } 
		 if(radioval1.length == 0 )
		 {
		 	$("#error2").text("Please select value").css('color','red').css('font-size','small');
		 }
		  else{
		 	$("#error2").text(" ");		 			 	 
			if(radioval1.val() == "Vadodara" )
			{
				$('#Vadodara').css("backgroundColor","yellow");
				$('#Pune').css("backgroundColor","white");
				$('#Allahabad').css("backgroundColor","white");
				$('#Delhi').css("backgroundColor","white");
				correct ++;
			}
			if(radioval1.val() == "Pune" ){

				$('#Vadodara').css("backgroundColor","yellow");
				$('#Pune').css("backgroundColor","red");
				$('#Allahabad').css("backgroundColor","white");
				$('#Delhi').css("backgroundColor","white");
				wrong++;
			}
			if(radioval1.val() == "Allahabad"){
				$('#Vadodara').css("backgroundColor","yellow");
				$('#Pune').css("backgroundColor","white");
				$('#Allahabad').css("backgroundColor","red");
				$('#Delhi').css("backgroundColor","white");
				wrong++;
			}
			if(radioval1.val() == "Delhi"){
				$('#Vadodara').css("backgroundColor","yellow");
				$('#Pune').css("backgroundColor","white");
				$('#Allahabad').css("backgroundColor","white");
				$('#Delhi').css("backgroundColor","red");
				wrong++;
			}
		 } 
		 
		 if(radioval2.length == 0)
		 {
		 	$("#error3").text("Please select the value").css('color','red').css('font-size','small');
		  }
		 else{
		 	$("#error3").text(" ");
			if(radioval2.val() == "Rajasthan" )
			{
				$('#Rajasthan').css("backgroundColor","yellow");
				$('#Uttar Pradesh').css("backgroundColor","white");
				$('#Maharashtra').css("backgroundColor","white");
				$('#Madhya Pradesh').css("backgroundColor","white");
				correct ++;
			}
			if(radioval2.val() == "Uttar Pradesh")
			{
				$('#Rajasthan').css("backgroundColor","yellow");
				$('#Uttar Pradesh').css("backgroundColor","red");
				$('#Maharashtra').css("backgroundColor","white");
				$('#Madhya Pradesh').css("backgroundColor","white");
				wrong++;
			}
			if(radioval2.val() == "Maharashtra")
			{
				$('#Rajasthan').css("backgroundColor","yellow");
				$('#Uttar Pradesh').css("backgroundColor","white");
				$('#Maharashtra').css("backgroundColor","red");
				$('#Madhya Pradesh').css("backgroundColor","white");
				wrong++;
			}
			if(radioval2.val() == "Madhya Pradesh")
			{
				$('#Rajasthan').css("backgroundColor","yellow");
				$('#Uttar Pradesh').css("backgroundColor","white");
				$('#Maharashtra').css("backgroundColor","white");
				$('#Madhya Pradesh').css("backgroundColor","red");
				wrong++;
			}
		 }
		 if(radioval3.length == 0)
		 {
		 		$("#error4").text("please Select the value").css('color','red').css('font-size','small');
		 }
		 else{
		 	$("#error4").text(" ");
			if(radioval3.val() == "Dehradun" )
			{
				$('#Dehradun').css("backgroundColor","yellow");
				$('#Delhi1').css("backgroundColor","white");
				$('#Shimla').css("backgroundColor","white");
				$('#Kulu').css("backgroundColor","white");
				correct ++;
			}
			if(radioval3.val() == "Delhi"){
				$('#Dehradun').css("backgroundColor","yellow");
				$('#Delhi1').css("backgroundColor","red");
				$('#Shimla').css("backgroundColor","white");
				$('#Kulu').css("backgroundColor","white");
				wrong++;
			}if(radioval3.val() == "Shimla"){
				$('#Dehradun').css("backgroundColor","yellow");
				$('#Delhi1').css("backgroundColor","white");
				$('#Shimla').css("backgroundColor","red");
				$('#Kulu').css("backgroundColor","white");
				wrong++;
			}if(radioval3.val() == "Kulu"){
				$('#Dehradun').css("backgroundColor","yellow");
				$('#Delhi1').css("backgroundColor","white");
				$('#Shimla').css("backgroundColor","white");
				$('#Kulu').css("backgroundColor","red");
				wrong++;
			}
			
		 }
		 if(radioval4.length == 0){
		 	$("#error5").text("Please select the value").css('color','red').css('font-size','small');
		 }
		 else
		 {
		 	$("#error5").text(" "); 	 
			if(radioval4.val() == "Faridabad" ){
				$('#Faridabad').css("backgroundColor","yellow");
				$('#Pune1').css("backgroundColor","white");
				$('#Bhopal').css("backgroundColor","white");
				$('#Lucknow').css("backgroundColor","white");
				correct ++;
			}if(radioval4.val() == "Pune"){
				$('#Faridabad').css("backgroundColor","yellow");
				$('#Pune1').css("backgroundColor","red");
				$('#Bhopal').css("backgroundColor","white");
				$('#Lucknow').css("backgroundColor","white");
				wrong++;
			}if(radioval4.val() == "Bhopal"){
				$('#Faridabad').css("backgroundColor","yellow");
				$('#Pune1').css("backgroundColor","white");
				$('#Bhopal').css("backgroundColor","red");
				$('#Lucknow').css("backgroundColor","white");
				wrong++;
			}if(radioval4.val() == "Lucknow"){
				$('#Faridabad').css("backgroundColor","yellow");
				$('#Pune1').css("backgroundColor","white");
				$('#Bhopal').css("backgroundColor","white");
				$('#Lucknow').css("backgroundColor","red");
				wrong++;
			}
			
		 }

		 if(correct == 0)
		 {
		 	$("#Mybar").css('width','100%').css('background-color','red');
		 	Score=10*0;
		 	$("#Score").text(Score);
		 	$("#picture").attr('src','Images/' +imgArray[2]);
		 }
		 if(correct==1)
		 {
		 	$("#Mybar").css('width','20%').css('background-color','seagreen');
		 	Score=10*1;
		 	$("#Score").text(Score);
		 	$("#picture").attr('src','Images/' +imgArray[4]);
		 }
		 if(correct==2)
		 {
		 	$("#Mybar").css('width','40%').css('background-color','seagreen');
		 	Score=10*2;
		 	$("#Score").text(Score);
		 	$("#picture").attr('src','Images/' +imgArray[4]);
		 }
		 if(correct == 3)
		 {
		 	$("#Mybar").css('width','60%').css('background-color','seagreen');
		 	Score=10*3;
		 	$("#Score").text(Score);
		 	$("#picture").attr('src','Images/' +imgArray[3]);
		 }
		 if(correct == 4)
		 {
		 	$("#Mybar").css('width','80%').css('background-color','seagreen');
		 	Score=10*4;
		 	$("#Score").text(Score);
		 	$("#picture").attr('src','Images/' +imgArray[0]);
		 }
		 if(correct == 5)
		 {
		 	$("#Mybar").css('width','100%').css('background-color','seagreen');
		 	Score=10*5;
		 	$("#Score").text(Score);
		 	$("#picture").attr('src','Images/' +imgArray[1]);
		 	
		 }
		 if(Score == 50){


		 }

		 if(radioval.length!=0 && radioval1.length!=0 && radioval2.length !=0 && radioval3.length !=0 && radioval4.length !=0 ){
		 	var calculatedScore = ""+Score;

		 $("#Score").val(""+Score);
		 var myValue =  $("#Score").val();
		 alert("value=" + myValue)
		 return true;
		  //document.getElementById("test").submit();
		 }
		 else
		 	return false;

		}


