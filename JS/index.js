


//GRAB AND CLONE INDIVUDAL ARTWORK

const template = document.querySelector("#artworks").content;


function getTitles(){
  fetch("http://dianajdesign.dk/exam/wp-json/wp/v2/artwork")
  .then(res => res.json())
  .then(showTitles)
}

function showTitles(titleList){

  titleList.forEach(showSingle)
}

function showSingle(title){

  const copy = template.cloneNode(true);
  copy.querySelector(".cover1").src=title.better_featured_image.source_url;
  document.querySelector("main").appendChild(copy);


}



getTitles();

