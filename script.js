let btn = document.getElementsByClassName("btn");
let productImage = document.querySelector('.product-image img');


btn[0].onclick =  function(){
    productImage.src = './Images/image1.png';

    for(bt of btn){
        bt.classList.remove("active");
    }

    this.classList.add("active");
}

btn[1].onclick = function(){
    productImage.src = './Images/image2.png'

    for(bt of btn){
        bt.classList.remove("active");
    }

    this.classList.add("active");
}

btn[2].onclick =function(){
    productImage.src = './Images/image3.png'

    for(bt of btn){
        bt.classList.remove("active");
    }

    this.classList.add("active");
}