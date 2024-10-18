var products=document.querySelectorAll(".bas-contain .card")

var btn=document.querySelector(".bas-show")
var bigdiv=document.querySelector(".bas-price")

var showdiv=document.querySelector(".bas-o")

var caption=document.querySelector(".bas-total")

var totdiv=document.querySelector(".bas-oo")

var totalprice=0

products.forEach(function(item){

    var button = item.querySelector(".butt")

    var price =parseInt(item.getAttribute("price"))

    var phrase=item.querySelector(".ppp")

    button.addEventListener("click",function(){

        showdiv.innerHTML += phrase.textContent + " && "

        totalprice+=price
        if(showdiv.textContent !== ""){
            btn.style.display="block"
        }
    })
   
})
btn.addEventListener("click",function(){
    totdiv.innerHTML=totalprice + "$"
    console.log(totalprice)
    if(totdiv.textContent!=""){
        caption.style.display="block"
        totdiv.style.display="block"
    }
})
