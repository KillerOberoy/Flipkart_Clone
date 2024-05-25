let sampleData = [
  {
    Brand: "Arrow",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 758,
    actualprice: "2,299",
  },
  {
    Brand: "Arrow",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 1329,
    actualprice: "1,799",
  },
  {
    Brand: "Arrow",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 1286,
    actualprice: 2499,
  },
  {
    Brand: "Arrow",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/z/o/46-ares02011a-arrow-sport-original-imagknbgg4dcqvvv.jpeg?q=70",
    names: "Men Slim Self Shirt",
    price: 1758,
    actualprice: "2,099",
  },
  {
    Brand: "Puma",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 558,
    actualprice: "1,399",
  },
  {
    Brand: "Puma",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 558,
    actualprice: "1,399",
  },
  {
    Brand: "Puma",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 5578,
    actualprice: "10,399",
  },
  {
    Brand: "Arrow",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/4/f/-original-imagsfejwcyfa4yx.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 2038,
    actualprice: "2,899",
  },
  {
    Brand: "Puma",
    img_src: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/v/5/xxl-67652258-puma-original-imagj4qb3ge3ptbf.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 558,
    actualprice: "1,399",
  },
  {
    Brand: "Puma",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 558,
    actualprice: "1,399",
  },
  {
    Brand: "Puma",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 558,
    actualprice: "1,399",
  },
  {
    Brand: "Puma",
    img_src:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
    names: "Men Slim Fit Self",
    price: 558,
    actualprice: "1,399",
  }
  // {
  //   Brand: "Puma",
  //   img_src:
  //     "https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
  //   names: "Men Slim Fit Self",
  //   price: "5578",
  //   actualprice: "10,399",
  // },
];
// localStorage.setItem("fashionProductData", JSON.stringify(sampleData));
// let fashionCollection =JSON.parse(localStorage.getItem("fashionProductData")) || [];
// fashionProduct();

// let fashionCollectionBox = document.getElementById("collection");

sampleData.map((element) => {
    let box = document.createElement("div");
    let price = document.createElement("span");
    price.innerHTML = " Offer Price "+element.price;
    let actualprice = document.createElement("span");
    actualprice.innerHTML = " Actual Price "+element.actualprice;
    actualprice.className="actualPrice"
    let innerBox=document.createElement("div");
    innerBox.append(price,actualprice);
    innerBox.className="priceBox";
    let brand=document.createElement("div");
    brand.append(element.Brand)
    let productLogo = document.createElement("img");
    productLogo.src = element.img_src;
    productLogo.className="avatar";
    box.append(productLogo,innerBox,brand);
    document.getElementById("collection").append(box);
    console.log("Function called")
  });


// sampleData.sort((a,b)=>{

//   return a.price-b.price;

// });

function lowToHigh(){
  document.getElementById("collection").innerHTML="";
  sampleData.sort((a,b)=>{

    return a.price-b.price;
  
  });
  sampleData.map((element) => {
    let box = document.createElement("div");
    let price = document.createElement("span");
    price.innerHTML = " Offer Price "+element.price;
    let actualprice = document.createElement("span");
    actualprice.innerHTML = " Actual Price "+element.actualprice;
    actualprice.className="actualPrice"
    let innerBox=document.createElement("div");
    innerBox.append(price,actualprice);
    innerBox.className="priceBox";
    let brand=document.createElement("div");
    brand.append(element.Brand)
    let productLogo = document.createElement("img");
    productLogo.src = element.img_src;
    productLogo.className="avatar";
    box.append(productLogo,innerBox,brand);
    document.getElementById("collection").append(box);
    // console.log("Function called");
  });
}

function highToLow(){
  document.getElementById("collection").innerHTML="";
  document.getElementById("collection").innerHTML="";
  sampleData.sort((a,b)=>{

    return b.price-a.price;
  
  });
  sampleData.map((element) => {
    let box = document.createElement("div");
    let price = document.createElement("span");
    price.innerHTML = " Offer Price "+element.price;
    let actualprice = document.createElement("span");
    actualprice.innerHTML = " Actual Price "+element.actualprice;
    actualprice.className="actualPrice"
    let innerBox=document.createElement("div");
    innerBox.append(price,actualprice);
    innerBox.className="priceBox";
    let brand=document.createElement("div");
    brand.append(element.Brand)
    let productLogo = document.createElement("img");
    productLogo.src = element.img_src;
    productLogo.className="avatar";
    box.append(productLogo,innerBox,brand);
    document.getElementById("collection").append(box);
    // console.log("Function called");
  });
}
