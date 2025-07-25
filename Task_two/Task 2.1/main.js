let header = document.getElementById("header")
header.style.textAlign="right"

let navigation = document.getElementById("navigation");
let nav = document.getElementById("nav");
nav.style.listStyleType="circle"
nav.style.listStylePosition="inside"

let end = document.createElement("footer")
document.querySelector(".center").appendChild(end)
let newImg = document.createElement("img");
newImg.src="dom.jpg"
newImg.alt="hello..it rains over here"

end.appendChild(newImg)
end.style.textAlign="left"

