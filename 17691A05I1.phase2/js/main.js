function submitdata()
{

  var career = document.querySelector("#career").value;
  var name = document.querySelector("#name").value;
  var emailid = document.querySelector("#emailid").value;
  var phno = document.querySelector("#phno").value;
  var institute = document.querySelector("#institute").value;
  var yop = document.querySelector("#yop").value;
  var skills = document.querySelector("#skills").value;
console.log(career);
console.log(skills);

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
   store = request.createObjectStore("formdata",{keypath:"id",autoIncrement:true});
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
  store.put({
    career : career,
    skills : skills,
    institute : institute,
    yop : yop,
    emailid:emailid,
    phno:phno,
    name:name



  });
}
window.open("index.html");
}
