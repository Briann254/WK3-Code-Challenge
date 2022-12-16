const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

print =  (value) => {console.log(value)}
document.addEventListener('DOMContentLoaded', ()=>{
  selectElems()
  
  fetch("http://localhost:3000/films")
  .then(res=>(res.json()))
  .then(data=> {
    console.log(data)
    data=data
    // print(data)
    // selector for our first movie poster
    image.src = data[0].poster 
    title.textContent = data[0].title
    description.textContent = data[0].description
    info[0].textContent = `Showtime =   ${data[0].showtime}`
    info[1].textContent = `Runtime =   ${data[0].runtime} mins`
    info[2].textContent = `Tickets-Sold =  ${data[0].tickets_sold}`
    remainder = (data[0].capacity)-(data[0].tickets_sold)
    footer.textContent = `${remainder}`  
})



// side navigation menu bar content displayer
fetch("http://localhost:3000/films")
.then(res=>(res.json()))
.then(data=>{
 let i = -1
 do{
  i+=1
  data2= data[i]
  // print (side[i])
  side[i].textContent = data2.title
//  print(data2.title)
 }while(i<14)   
//  print (side[0].textContent)
  })
  // side bar navigation menu displayer
openNav.addEventListener("click", 
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.querySelector('div.header').style.marginLeft = "350px";
    document.querySelector('div.card').style.marginLeft = "350px";
    // print( document.getElementById("mySidenav"))
  });
  document.getElementById("closeNav").addEventListener("click", 
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('div.header').style.marginLeft = "0";
    document.querySelector('div.card').style.marginRight = "50";
  });
  // print(`hello`)

  const container = document.querySelectorAll('a.others');
  side.forEach(side =>{
    side.addEventListener('click', (e) => {
      e.preventDefault()
      fetch("http://localhost:3000/films")
      .then(res=>(res.json()))
        .then(data=> {
          data3 = data
          let i = Array.prototype.indexOf.call(side.parentNode.children, side);
          image.src = data3[i].poster 
            title.textContent = data3[i].title
            description.textContent = data3[i].description
            info[0].textContent = `Showtime =   ${data3[i].showtime}`
            info[1].textContent = `Runtime =   ${data3[i].runtime} mins`
            info[2].textContent = `Tickets-Sold =  ${data3[i].tickets_sold}`
            remainder = (data3[i].capacity)-(data3[i].tickets_sold)
            footer.textContent = `${remainder}` 
          
        })});
  })


})


selectElems = () =>{
  openNav = document.getElementById("openNav")
  image = document.querySelector('img.card-img-top')
  title = document.querySelector('h5')
  description = document.querySelector('.card-text')
  info = document.querySelectorAll('li.info')
  footer = document.querySelector('small#number'); 
  side = document.querySelectorAll('a.others'); 
  const as = document.querySelectorAll('a.others');
};


displayMovie=()=>{


}