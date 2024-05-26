let categories=[
    {
        imgSrc:"https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
        tittle:"Grocery",
    },

    {
        imgSrc:"https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
        tittle:"Mobile"
    },

    {
        imgSrc:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
        tittle:"Fashion"
    },

    {
        imgSrc:"https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
        tittle:"Electronics"
    },

    {
        imgSrc:"https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
        tittle:"Home & Furniture"
    },

    {
        imgSrc:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",
        tittle:"Appliances"
    },

    {
        imgSrc:"https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
        tittle:"Travel"
    },

    {
        imgSrc:"https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
        tittle:"Beauty,Toys & More"
    },

    {
        imgSrc:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
        tittle:"Two wheelers"
    }
]

categories.map((e) => {
    var image = document.createElement("img");
    image.src = e.imgSrc;
    let box = document.createElement("div");

    if(e.tittle=="Fashion"){
    var link=document.createElement("a");
    link.href="product.html";
    link.append(image);
    box.append(link);
}
else if(e.tittle=="Electronics"){
    var link=document.createElement("a");
    link.href="electronics.html";
    link.append(image);
    box.append(link);
}
else if(e.tittle=="Mobile"){
    var link=document.createElement("a");
    link.href="mobile.html";
    link.append(image);
    box.append(link);
}
else{
    box.append(image);
}
    let title = document.createElement("p");
    title.innerHTML = e.tittle;
   
    box.append(title); // Changed from image to anchor here
    document.getElementById("categories").append(box);
    console.log(box);
})

    


