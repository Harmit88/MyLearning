 var myArray=["Hyderabad","Vadodara","Rajasthan","Dehradun","Faridabad"];
 var imgArray =["A_Grade.jpg","excellent.jpg","Fail.jpeg","Verygood.jpeg","workhard.jpg"];
 $("#disp").hide();
function validate(){
	var i=0;
	var correct=0;
	var list= $("h4");
	console.log(list);
while(i < list.length){
console.log("this is output" +list[i].innerHTML);
	var radioval=$('input[name='+(i+1)+']:checked');
	if(radioval.val() == myArray[i])
	{
		correct++;
	}
	else
	{
	}
	i++;
} 
$("#Score").text(correct*10);
$("#disp").show();
if(correct*10 <=20)
{
	$("#Mybar").css('width','25%').css('background-color','green');
		 	$("#Score").text(correct*10);
		 	$("#picture").attr('src','Images/' +imgArray[2]);
}
if(correct*10 == 30)
{
	$("#Mybar").css('width','50%').css('background-color','green');
		 	$("#Score").text(correct*10);
		 	$("#picture").attr('src','Images/' +imgArray[4]);
}
if(correct*10 == 40)
{
	$("#Mybar").css('width','75%').css('background-color','green');
		 	$("#Score").text(correct*10);
		 	$("#picture").attr('src','Images/' +imgArray[3]);
}
if(correct*10 === 50)
{
	$("#Mybar").css('width','100%').css('background-color','green');
		 	$("#Score").text(correct*10);
		 	$("#picture").attr('src','Images/' +imgArray[1]);
}

}