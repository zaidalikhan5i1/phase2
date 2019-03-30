var idb = window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;

if(!idb in window)
{
  console.log("indexeddb not supports");
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
  var info = store.getAll();
  info.onsuccess = function(data){
    console.log(data.target.result);
    display(data.target.result);
  }
}
function display(d){
  var parent = document.querySelector(".parent");

  for(var i = 0 ; i < d.length ; i++)
  {
    var child  = document.createElement("div");
    var name   = document.createElement("h2");
    var link   = document.createElement("a");
    var image  = document.createElement("img");


    child.classList.add("child");
    link.classList.add("link");

    image.src = "images/man.svg";
    name.innerHTML = d[i].name;


    link.href = "resume.html?id="+d[i].id;
    link.textContent = "view profile";

   child.append(image);
   // child.append(career);
   child.append(name);
   // child.append(emailid);
   // child.append(phno);
   // child.append(institute);
   // child.append(yop);
   // child.append(skills);
   child.append(link);
   parent.append(child);
  }


}
