// CHAP 21

// var allLower = "karachi";
// allLower = allLower.toLowerCase();

// var x = "PAKISTAN";
// x = x.toLowerCase();
// console.log(x);

// var y = "quetta";
// y = y.toUpperCase();
// console.log(y);

// var z = "ISLAMABAD";
// z = z.toLowerCase();

// var b = ["KURULUS OSMAN"];
// var c = b[0].toLowerCase();
// console.log(c);
   
// var a = "pakistan";
// a = alert(a.toUpperCase()); 

// var cityName = "kaRacHi";
// var copy = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
// console.log(copy);

// CHAP 22 - 25

// var ab = "captain";
// var bb = "sameWords"
// var slicedWords = ab.substring(0, 1) + ab.substring(3) + bb;
// console.log(slicedWords);

// var ab = "captain";
// var bb = ab.length;
// console.log(bb);

// var animal = "elephant";
// var seg = animal.slice(2 , 6);
// console.log(seg);

// var a = "pakistan zindabad";
// var b = a.length;
// console.log(b);

// var a = "fayyazbaig";
// var b = a.length;
// var c = a.charAt(0) + a.slice(-3);
// console.log(b);
// console.log(c);

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// console.log(indx);

// var text = "ready go"
// var indx = text.indexOf("go");
// console.log(indx);


// var myword = "pakistan zindabad"
// var indexNum = 5;

// if(indexNum >= 0 && indexNum < myword.length){
//     console.log(`index ${indexNum} exists in the string`);
// }else{
//     console.log(`index ${indexNum} not exists in the string`);
// }

// var cha = "abcde";
// var result = cha.charAt(2);
// console.log(result);

// var mycha = "huzair adil baloch";
// var cha = mycha.charAt(10);
// console.log(cha);

// var str = "fayyazbaigsharifbaigmughal";
// var x = str.charAt(str.length -1);
// console.log(x);

// var str = "abcdefg";
// var x = str.charAt(4);
// console.log(x);

// var str = "blue sea"
// var spicha = "u";
// if(str.charAt(2) === spicha){
// console.log("the 3rd cha of the string is" + " " + spicha + ".");
 
// }else{
//     console.log("the 3rd cha of the string is" + spicha + ".");
// }

// var str = "karachi the city of ligths";
// var arr = [];

// for(var i = 0; i < str.length; i++){
//     arr.push(str[i]);
// }
// console.log(arr);

// var rep = "no i think soo.";
// var revisedReply = rep.replace("no" , "yes");

// console.log(revisedReply);


// var str = "i have 1 laptop and 1 mob";
// var newStr = str.replace("1" , "one" );

// console.log(newStr);

// var x = "abc";
// var y = x.replace(/abc/g, "fayyazbaig");

// CHAP 26

// console.log(y);

// var x = 2.5656784;
// var y = Math.round(x);

// console.log(y);

// var origNum = 22.49;
// var roundNum = Math.ceil(origNum);

// console.log(roundNum);

// var origNum = 21.8;
// var roundNum = Math.floor(origNum);

// console.log(roundNum);

// var x = 2.5656784;
// var y = Math.round(x);

// console.log(y);

// var origNum = .5;
// var roundNum = Math.floor(origNum);

// console.log(roundNum);

// CHAP 27

// var r = Math.random();
// var v = Math.floor(r * 50); + 1;

// console.log(v);

// var rondumNum = Math.random();

// var rondumNum = Math.random();

// var diceValue = Math.ceil(rondumNum * 2);

// if(diceValue == 1){
//     console.log("head");
// }else{
//     console.log("tails");
// }

// CHAP 28 , 29

// var str = "50";
// var integar = parseInt(str);

// console.log(integar);

// var str = "50";
// var integar = Number(str);

// console.log(integar);

// function convert (str){
//     return Number(str);
// }
// var str = "123";
// var integar = convert (str);

// console.log (integar);

// var str = "7.5167700";
// var num = parseFloat(str).toFixed(2);

// console.log(num);

// var str = "3456";
// var num = Number(str);

// console.log( typeof num);

// var num = 543;
// var str = num.toString();

// console.log( typeof str);
  
// function csintonum(num) {
//     return num.toString();
// }
// var num = 42;
// var str = csintonum(num)

// console.log(str);

// var str = "3.14";
// var num = parseInt(str);

// console.log( num);
  
// CHAP 30

// var num = 10.608908;
// var rou = num.toFixed(4);
// var NewNum = rou.toString();

// console.log(NewNum);

// var num = 30.23574;
// var rou = num.toFixed(2);
// var NewNum = rou.toString()
// console.log( typeof NewNum);

// NewNum = Number(rou);
// console.log( typeof NewNum);

// var num = 50.27436488;
// var roudednum = num.toFixed(2).toString();


// if(roudednum.length > 4){
//     console.log("the num big than 4 character");
// }else{
//     console.log("the num fewer the character");
// }

// var num = 15.361546;
// alert(num);
// var roundNum = num.toFixed(2).toString();
// alert(roundNum);
// console.log(roundNum);

// CHAP 31 TO 34

// var dobj = new Date()
// console.log(dobj);

// var dobj = new Date();
// var Dstr = dobj.toString();

// console.log( typeof Dstr);

// var d = new Date ();
// var newday = d.getDay();

// console.log(newday);

// var date = new Date();

// var currentday = ["sunday","monday","tuesday","wenwsday","thursday","friday","saturday"];
// var theday = date.getDay();

// console.log(currentday[theday])

// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth();
// var day = d.getDate();
// var hours = d.getHours();
// var minutes = d.getMinutes();
// var seconds = d.getSeconds();
// var milliseconds = d.getMilliseconds();

// console.log(year, month, day, hours, minutes, seconds, milliseconds);

// var date = new Date(2020 , 11 ,31);
// console.log(date);

// var date = new Date(1992 , 01 , 02);
// console.log(date);


// alert(Date.parse("1980-01-01") - 0);

// var date = new Date ();
// date.setFullYear(2022);

// console.log(date);

// function change (date){
//     date.setMonth(0);
//     return date;
// }

// var myDate = new Date();
// console.log(myDate);

// var SetDate = change(myDate);
// console.log(SetDate);

// var date = new Date();
// date.setDate(21);

// console.log(date);

// function changeminutes (minutes,specifictime){
//     minutes.setMinutes(specifictime);
//     return minutes;
// }
// var myTime = new Date();
// console.log(myTime);

// var specifictime = parseInt(prompt("enter your time"));
// var result = changeminutes (myTime , specifictime);

// console.log(result);

