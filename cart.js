let cartData=JSON.parse(localStorage.getItem("cartData")) || [];

function calculate(){
        let cartItem=document.getElementById("cartData");
        cartItem.innerHTML=cartData.length;
        cartItem.style.color="blue";
    }
    
    calculate();
    console.log(cartData);

    // function handleRemoveFromCart(product) {
    //     return function () {
    //         // Find the index of the product to be removed
    //         const index = cartData.findIndex(item => item.title === product.title);
    
    //         // Remove the product from the array
    //         if (index !== -1) {
    //             cartData.splice(index, 1);
    
    //             // Update local storage
    //             localStorage.setItem("cartData", JSON.stringify(cartData));
    
    //             // Recalculate and update the display
    //             calculate();
    //             displayCartProducts(cartData); // Refresh the displayed products
    //         }
    //     };
    // }
    

    function toDisplayCartAddedProducts(cartData){
        cartData.map((e)=>{
            let mainContainer=document.createElement('div');
            mainContainer.className="mainContainer";
            // Left Box
            let leftBox=document.createElement("div");
            leftBox.className="leftBox"

            let thumbnail=document.createElement("img");
            thumbnail.src=e.thumbnail;
            thumbnail.className="thumbnail";
            
            leftBox.append(thumbnail);

            // Middle Box

            let middleBox=document.createElement("div");
            middleBox.className="middleBox";

            let title=document.createElement("span");
            title.className="cartProdcuctTitle";
            title.innerHTML=e.title;

            let price=document.createElement("span")
            price.innerHTML=`Price ${e.price}`;

            let discountedPercentage=document.createElement("span");
            discountedPercentage.innerHTML=`Discount ${e.discountPercentage}%`

            // let quantity=document.createElement("span");
            // quantity.className="quantity"

            // let plusCart=document.createElement("button");
            // plusCart.className="plusCart";
            // plusCart.innerHTML=" + ";

            // let minusCart=document.createElement("button");
            // minusCart.className="minusCart";
            // minusCart.innerHTML=" - ";

            // quantity.append(plusCart,minusCart);

            let removeCartItem=document.createElement("button");
            removeCartItem.className="removeCartItem";
            removeCartItem.innerHTML="Remove Item";
            // removeCartItem.addEventListener("click", handleRemoveFromCart(e)); // Attach click event

            middleBox.append(title,price,discountedPercentage,removeCartItem);

            // Right Box
            let rightBox=document.createElement("div");
            rightBox.className="rightBox";

            let quantityToBuy=document.createElement("span");
            quantityToBuy.className="quantityToBuy";

            // quantityToBuy.innerHTML=`${}`

            // Append to Cart Display
            document.getElementById('cartSection').append(leftBox,middleBox,rightBox );
            // document.getElementById('cartSection').append(mainContainer);
        })
    }
    toDisplayCartAddedProducts(cartData);