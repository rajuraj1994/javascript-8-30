let img_array=['a.jpg','b.jpg','c.jpg','d.jpg','d.png']
let array_length=img_array.length
let i=0



const slider=()=>{
    i++
    i=i%array_length
    document.getElementById('image').src='./images/'+img_array[i]
}

let set=setInterval(slider,5000)
//here slider is a function

function next(){
    i++
    i=i%array_length
    document.getElementById('image').src='./images/'+img_array[i]
}

function prev(){
    i--
    if(i<0){
        i=array_length-1
    }
    document.getElementById('image').src='./images/'+img_array[i]
}

const stops=()=>{
    clearInterval(set)
}

const starts=()=>{
    set=setInterval(slider,5000)
}
