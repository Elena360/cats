const createCard = (data,parent,arr)=>{

    const card = document.createElement("div")
    card.className = "card"
    card.dataset.id = data.id;

    const age = document.createElement("div")
    age.className = "age"
    age.innerText = data.age

    const name = document.createElement("div")
    name.className = "name"
    name.innerText = data.name

    const pic = document.createElement("div")
    pic.className = "pic"
    pic.style.backgroundImage = `url(${data.img_link || "images/c1.png"})`

    const rate = document.createElement("div")
    rate.className = "rate"
    rate.innerHTML = "<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>"

    card.append(pic,name,rate,age)
    card.addEventListener("click",function() {
        showPopup(arr, "card")})

    parent.append(card)
}

const showPopup = (list,type,content)=>{
    let el = list.filter(el =>el.dataset.type === type)[0];
el.classList.add("active");
el.parentElement.classList.add("active")
}
