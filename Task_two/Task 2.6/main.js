let cardsNum = document.getElementById("cardsNum")
let sub = document.getElementById("sub")


sub.addEventListener("click",function(){
    let num = Number(cardsNum.value)
    if(isNaN(num) || num<0)
    {
        alert("enter valid number")
        return;
    }

    // fecthPromise(num)
    fetchAsync(num)

})

function fecthPromise(num){
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${num}`)
    .then(res=>res.json())
    .then(posts =>{ 
        let container = document.getElementById("container")
        container.innerHTML=""
        posts.forEach(post =>{
            let card=
            `<div style="border:1px solid #ccc; padding:10px; margin:10px;">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>`
            container.innerHTML += card
        })

    })
    .catch(error => console.error("error"))
}


async function fetchAsync(num){
try{let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${num}`)
let posts = await res.json()
let container = document.getElementById("container")
posts.forEach(post =>{
    let card = `<div style="border:1px solid #ccc; padding:10px; margin:10px;">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>`
            container.innerHTML += card
})

}catch(err){
    console.error("error")
}
}
