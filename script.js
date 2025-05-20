let sq1 =document.getElementById("box1")

sq1.addEventListener("click",()=>{
    sq1.innerHTML=Math.ceil(Math.random()*500)
    // sq3.innerHTML=Math.ceil(Math.random()*50)
    // sq4.innerHTML=Math.ceil(Math.random()*5500)
})

sq1.addEventListener("mouseleave",()=>
{
    sq1.innerHTML ="1"
    sq1.style.backgroundColor="white"
    sq1.style.color="black"
})

let sq2 =document.getElementById("box2")
let clr ="red"
sq2.addEventListener("click",()=>
{
    sq2.style.backgroundColor="#022745"
    sq2.style.color="#a8d8ff"
    
})
sq2.addEventListener("mouseenter",()=>
    {
        if(clr=="red")
        {
            sq2.style.backgroundColor="red"
            clr ="green"
        }
        else{
            sq2.style.backgroundColor ="green"
            clr = "red"
        }
    })
sq2.addEventListener("mouseleave",()=>
    {
       
        sq2.innerHTML ="2"
        sq2.style.backgroundColor="white"
        sq2.style.color="black"
    })


let sq3 =document.getElementById("box3")

sq3.addEventListener("mouseenter",()=>
{
        let r = Math.ceil(Math.random()*255)
        let g = Math.ceil(Math.random()*255)
        let b = Math.ceil(Math.random()*255)
        sq3.style.backgroundColor =`rgb(${r}, ${g}, ${b})`
        
})
sq3.addEventListener("mouseleave",()=>
    {
        sq3.innerHTML ="3"
        sq3.style.backgroundColor="white"
        sq3.style.color="black"
    })
let sq4 =document.getElementById("box4")

sq4.addEventListener("click",()=>
{
        let r = Math.ceil(Math.random()*255)
        let g = Math.ceil(Math.random()*255)
        let b = Math.ceil(Math.random()*255)
        sq3.style.backgroundColor =`rgb(${r},255,255)`
        sq2.style.backgroundColor =`rgb(255,${r},255)`
        sq1.style.backgroundColor =`rgb(255,255,${r})`
})
sq4.addEventListener("mouseleave",()=>
    {
        sq4.innerHTML ="4"
        sq4.style.backgroundColor="white"
        sq4.style.color="black"
    })