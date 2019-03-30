var para;
var paravalue;
var query = window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}



var idb = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

if(!idb in window)
{
  console.log("indexeddb supports");
}


var store;
var request;
var open = idb.open("storedata",1);
console.log("indexeddb is created");

open.onupgradeneeded = function (e){
  request = e.target.result;
   store = request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}

open.onerror = function(e){
  console.log("error");
}

open.onsuccess = function(e)
{
  request = e.target.result;
  var transaction = request.transaction("formdata","readwrite");
  store = transaction.objectStore("formdata");
  var info= store.get(paravalue);
  info.onsuccess = function(data){
    console.log(data);
    personalinfo(data.target.result);
  }

}

var left = document.querySelector(".left");
function personalinfo(pi){

  var image = document.createElement("img");
   var name = document.createElement("h2");
   var emailid = document.createElement("h2");
   var phno    = document.createElement("h2");
   var institute = document.createElement("h2");
   var yop       = document.createElement("h2");
   var skills    = document.createElement("h2");
   var career = document.createElement("h2");


  image.src = "images/man.svg";
  // image.alt = pi.name;

  name.textContent = pi.name;
  career.innerHTML = pi.career;
  phno.innerText = pi.phno;
  emailid.innerHTML = pi.emailid;
  institute.innerHTML = pi.institute;
  yop.innerHTML = pi.yop;
  skills.innerHTML = pi.skills;

  left.append(image);
  left.append(career);
  left.append(name);
  left.append(emailid);
  left.append(phno);
  left.append(institute);
  left.append(yop);
  left.append(skills);
  // parent.append(left);


}
