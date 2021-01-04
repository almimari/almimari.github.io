// note a few things about this version of theProps
// 1) the delimiter is two pipe symbols ||, 
	//this is because you can use any delimiter you want that will be unique
	// in the code on the HTML page I split by "||"
	// often spreadsheet-like data is separated by tabs or commas "," (CSV)
// 2) there is no header for these values
	// in the more advanced version the first line [0] is a header
	// that contains the names at the properties that will be put in the object
	// in this version you defined the property names in the loop in the HTML page
//column names:
// 		  id||buttontext||choices||image||end
homeWithYou = `0||"apples, cherries","pain"||1,2||image0.jpg||FALSE
1||"breathe in, breathe out"||2||image1.jpg||FALSE
2||"yes","no"||3,4||image2.jpg||FALSE
3||"I do think so","I don’t think so"||5,6||image3.jpg||FALSE
4||"yes","no"||5,6||image4.jpg||FALSE
5||"yes","no"||7,8||image5.jpg||FALSE
6||"yes"||8||image6.jpg||FALSE
7||"the","end"||||image7.jpg||TRUE
8||"yes"||7||image8.jpg||FALSE`


// theText as a separate variable for longer strings of text separated by #############
// you can separate the text by anything that you're sure will be unique so you can split by it

//in order from 0-8!!

theText = `
I'm so wired for it, seen it, tried it <br>
I'd die for you on my terms <br>
When I get my lessons learned 

#############


Breathe in, breathe out, pain <br>
No, no, Novocaine <br>
Still maintain my grace 

#############


How come the more you have the more that people want from you? <br>
The more you burn away the more the people earn from you <br>
The more you pull away the more that they depend on you <br>
I've never seen a hero like me in a sci-fi <br>

Have you ever seen a hero like you in a sci-fi? 

#############

So I wonder if your needs are even meant for me <br>
I wonder if you think that I could ever raise you up <br>
I wonder if you think that I could ever help you fly?

#############


But I've seen my love and I thought it belonged to you <br>
Mary Magdalene would never let her loved ones down <br>

Would Mary Magdalene let her loved ones down?

#############

I, didn't know that you were lonely <br>
If you'd have just told me, I'd be home with you <br>
I, didn't know that you were lonely <br>
If you'd have just told me I'd be running down the hills to you <br>

Did you know that you were lonely?

#############

When I visualize <br>
All I see is black <br>

Do you see black?
#############

And I'd have told you I was lonely too


#############



If you'd had just told me I'd be home with you, <br>

Would you be running down the hills to me? 


`
