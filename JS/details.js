const template = document.querySelector("#descriptionTemplate").content;
const params = new URLSearchParams(window.location.search);
console.log(params)
const id = params.get("id")

// let location1 = window.location.href;
// let id = location1.split("/")
//
// console.log(id[id.length-1]);
// console.log(location1);

const baseLink = "http://dianajdesign.dk/exam/wp-json/wp/v2/";
const parent = document.querySelector(".artinfo")

function loadWork(id){
	fetch(baseLink+"artwork/"+id).then(e=>e.json()).then(showOne);
}

function showOne(work){
	console.log(work);
	const clone = template.cloneNode(true);


	clone.querySelector(".cover2").src=work.better_featured_image.source_url;
	clone.querySelector(".name").textContent = work.acf.nameofartwork_;
  clone.querySelector(".medium").textContent = work.acf.medium;
  clone.querySelector(".size").textContent = work.acf.size_;

	parent.appendChild(clone);



}

loadWork(id);


const arrowBack = document.querySelector(".arrowBack");

arrowBack.addEventListener("click", goBack);

function goBack(){
    window.location.href='works.html'
}
