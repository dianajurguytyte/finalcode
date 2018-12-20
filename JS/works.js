/*the examples for these functions are taken from github repository - https://github.com/alan-engelhardt/t7_cars*/
const template = document.querySelector("#artworks").content;
//const nav = document.querySelector(".navBar");
const nav = document.querySelector("#cat-nav");
const params = new URLSearchParams(window.location.search);
const catID = params.get("catid");
const srt = params.get("sort");

const workID = params.get("id");
const baseLink = "http://dianajdesign.dk/exam/wp-json/wp/v2/artwork?per_page=50";
const baseLink2 = "http://dianajdesign.dk/exam/wp-json/wp/v2/";

if(catID){
	loadWorksByCat(catID);
}else{
  getTitles();
}

function loadCategories(){
	fetch(baseLink2+"categories").then(e=>e.json()).then(makeMedMenu);
}

function loadWorksByCat(catID){
	fetch(baseLink+"&categories="+catID+"&_embed").then(e=>e.json()).then(showTitles);

}

function makeMedMenu(cats){
	cats.forEach(cat=>{
		//console.log(cat);
		const newA = document.createElement("a");
		newA.textContent=cat.name;
		newA.href="?catid="+cat.id;
		nav.appendChild(newA);
	})
    const navBarAs = document.querySelectorAll(".navBar a");
navBarAs.forEach(a=>console.log(a))
}

loadCategories();

function getTitles(){
  fetch("http://dianajdesign.dk/exam/wp-json/wp/v2/artwork?per_page=50")
  .then(res => res.json())
  .then(showTitles)
}

function showTitles(titleList){
	console.log(titleList);
  titleList.forEach(showSingle)
}

function showSingle(title){
  //console.log(title.better_featured_image);

  const copy = template.cloneNode(true);
  copy.querySelector("a").href+=title.id;
  copy.querySelector(".cover1").src=title.better_featured_image.source_url;
  document.querySelector("main").appendChild(copy);
}
