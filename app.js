let arr=[1,2,4,6,8,12,15,19,21,25,35,89];

document.getElementById("number").innerHTML="This is number array =  "+arr;

let arr1 ="    arraytrim";

// intro string array
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus tellus, tempor eget sodales sed, elementum eu dolor. Etiam sit amet sagittis nisi. Donec ut elit eleifend, commodo quam id, tempor nibh. Nulla pretium consequat nunc sit amet pretium. Proin faucibus ipsum id consequat finibus. Aenean odio eros, tempus eu efficitur sit amet, volutpat ac libero. Etiam suscipit, ligula ut egestas aliquam, enim ligula malesuada leo, vitae vestibulum dolor massa et nibh. Nulla facilisi.";

document.getElementById("length").innerHTML= text.length;

document.getElementById("uppercase").innerHTML= text.toUpperCase();

document.getElementById("slice").innerHTML= text.slice(12,17);

document.getElementById("slice2").innerHTML= text.slice(25,35);

document.getElementById("slice3").innerHTML= text.slice(-16,-10);

document.getElementById("substring").innerHTML= text.substring(16,24);

document.getElementById("substr").innerHTML= text.substr(6,5);

document.getElementById("substr1").innerHTML= text.substr(480);

document.getElementById("substr2").innerHTML= text.substr(-9);

document.getElementById("replace").innerHTML= text.replace("sit","seat");

document.getElementById("arradd").innerHTML= text + arr;


document.getElementById("concat").innerHTML= text.concat("",arr);

document.getElementById("notrim").innerHTML=arr1; 

document.getElementById("trim").innerHTML= arr1.trim();

document.getElementById("index").innerHTML= text.indexOf("amet");

document.getElementById("notext").innerHTML= text.indexOf("characters");

document.getElementById("search").innerHTML= text.search("ipsum");

document.getElementById("includes").innerHTML= text.includes("Etiam");

document.getElementById("includes1").innerHTML= text.includes("etiam");

// document.getElementById("notext").innerHTML= text.indexOf("characters");