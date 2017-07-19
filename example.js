// window.onload = function(){
// 	var para = document.createElement("p");
// 	var testdiv ＝ document.getElementById('testdiv');
// 	testdiv.appendChild(para) ;
// 	var txt = document.createTextNode("hello world");
// 	para.appendChild(txt);
// }





window.onload = function(){
 	var para = document.createElement("p");
 	var txt1 = document.createTextNode("This is");
 	var txt2 = document.createTextNode("content.");
 	var txt3 = document.createTextNode("my");
 	var em = document.createElement("em");
 	var testdiv = document.getElementById("testdiv");

 	testdiv.appendChild(para);
 	para.appendChild(txt1);
 	em.appendChild(txt3);
 	 	para.appendChild(em);

 	para.appendChild(txt2);


}