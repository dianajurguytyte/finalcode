const template = document.querySelector("#about").content;


function getTitles(){
  fetch("http://dianajdesign.dk/exam/wp-json/wp/v2/about")
  .then(res => res.json())
  .then(showTitles)
}

function showTitles(titleList){
console.log(titleList);
  titleList.forEach(showSingle)
}

function showSingle(title){

  const copy = template.cloneNode(true);
  
    copy.querySelector(".aboutText").textContent = title.acf.bio;

  document.querySelector("main").appendChild(copy);




}



getTitles();
