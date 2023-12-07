const apiKey ="JhGLILkehuGwLBBOg3CBazVbk1dwfWaGqhZRmUGTzE4" ;

const formel=document.querySelector("form");
const inputel =document.getElementById("ser-input");
const btnel =document.getElementById(" ser-btn");

const searchResults =document.querySelector("#img-box")
const showMore =document.getElementById("showbtn")

 let inputdata="";
 let page=1;
  async function searchImages(){
    inputdata = inputel.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${apiKey}`
   const responce =await fetch(url)
   const data = await responce.json()
    
   const results = data .results
   if(page===1){
    searchResults.innerHTML=""
   }
   results.map( (results)=>{
    const imgDiv = document.createElement('div');
    imgDiv.classList.add("search-result")
    const imgEl = document.createElement('img')
    imgEl.src=results.urls.small;
    imgEl.alt=results.alt_description;
     
    const imglink =document.createElement('a')
    imglink.href = results.links.html
    imglink.target='_blank'
  imglink.textContent=results.alt_description;
  const downlodabtn = document.createElement("i")
 
  imgDiv.appendChild(imgEl);
  imgDiv.appendChild(imglink);
  searchResults.appendChild(imgDiv);

   })
   page++;

   if(page>1){
    showMore.style.display="block"
   }
 }
 formel.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();

 })
 showMore.addEventListener("click",(e)=>{
     
    searchImages();

 })
 