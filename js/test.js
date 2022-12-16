const API = "http://localhost:3000/films"
fetching = fetch(API)
print =  (value) => {console.log(value)};



// reduce the number of tickets 
const btn = document.getElementById('buy-ticket')
btn.addEventListener('click', function(e){
    let number = document.querySelector('#number').textContent
    e.preventDefault()
    print(number)
    if(number > 0){
        document.querySelector('#number').textContent  = number-1 

    }
    else {
        document.querySelector('#buy-ticket').textContent = "sold-out"
        alert("sold out,try again earlier next time") 
        btn.className = "btn btn-danger"
        btn.classList.add('')
}})
