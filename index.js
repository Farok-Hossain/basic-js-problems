//document.write("farok");

//if,else if,for loop
/*
var num=prompt("enter the value :");
if (num <= 100 && num >=80)
document.write("A+");
else if (num <= 79 && num >=70)
document.write("A");
else if (num <= 69 && num >=40)
document.write("D");
else if(num <= 39 && num >=0)
document.write("Fail");
else
document.write("Null");
*/
/*
switch case

var letter=prompt("enter the letter:");
letter=letter.toLowerCase();
switch(letter){
     case "a":
     case "e":
     case "i":
     case "o":
     case "u":
     document.write("Vowel");
     break;
     default:
         document.write("consunant");
    }
    */
   /*
   for loop

   var i;
   for( i=1; i<=100 ; i=i+2)
   {
       document.write(" "+i );
   }
   document.write("end"); 
   
  var n=prompt("Enter your value:");
  var sum=0;
  for(x=0;x<=n;x=x+1){
      sum=sum+x;
  }
  document.write(sum);
  
 var a=parseInt(prompt("enter 1st value:"));
 var b=parseInt(prompt("enter 2nd value:"));
 var sum=a+b;
 document.write(sum);
 */



/*
 while loop

var i=1,sum=0;
while(i<=100){
    sum=sum+i;
    i=i+1;
}
document.write(sum);
*/

/* do while loop

var i=1, n=prompt("enter value:");
do{
    document.write(" "+ i);
    i++;
} while(i<=n);

*/

/* break continue loop

 var i;
 for(i=0; i<=50; i++){
    
     if(i==20){
         break;
     }
     document.write(" "+i);
 }

 var i;
 for(i=1; i<=50; i++){
    
     if(i==20){
      continue;
     }
     document.write(" "+i);
 }
 */


/* creating function

 function square(num){
 var num;
 var result=num *num;
 document.write("Result= "+result +"<br>");
 }
 // call a function
 square(9);
 square(7);
 */


 /*
var names= new Array();
names[0]="farok";
names[1]="afs";
names[2]="hossain";
document.write(names[0] +"<br>");
document.write(names[1]+"<br>");
document.write(names[2]+"<br>");
document.write("Array size="+names.length);
 
 
