recommendation = function(){

result.style.WebkitAnimation = "fadeOut";
result.style.animation = "fadeOut";
setTimeout(() => {
    result.style.display = "none";
    recommend.style.WebkitAnimation = "fadeIn";
    recommend.style.animation = "fadeIn";
    setTimeout(() => {
        recommend.style.display = "block";
    })

})

    if(point == 0){     //introvert
        window.open("https://smartstore.naver.com/mineu/products/3791962340?"); //one product
    }
    if(point == 1){     //extrovert
        window.open("https://smartstore.naver.com/mineu/products/4083519754?"); //three products
    }
        }