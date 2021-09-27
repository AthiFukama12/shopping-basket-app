    const myDemo = document.querySelectorAll("p.demo");
    const data = [
        {
            code: "basket1",
            description: "basket 1",
            items: [
                {
                    description: "apples",
                    price: 10.12
                },
                {
                    description: "bread",
                    price: 12.15
                },
                {
                    description: "rice",
                    price: 15.08
                },
                {
                    description: "potatoes",
                    price: 23
                },
                {
                    description: "chillies",
                    price: 0.50
                }
            ]
        },
        {
            code: "basket2",
            description: "basket 2",
            items: [
                {
                    description: "coke",
                    price: 19.26
                },
                {
                    description: "flour",
                    price: 24.00
                },
                {
                    description: "cheese",
                    price: 15.16
                }
            ]
        }
    ];

    //Basket 1.
    const ul1 = document.querySelector("ul.basket1");
    data[0].items.forEach(e => {
        const li = document.createElement("li");
        li.innerHTML = e.description + " R" + e.price;
        ul1.append(li);
    });

    //Average Price.
    const avrP = document.querySelectorAll("li.avP");
    //Passing a function to map.
    const prices = data[0].items.map(p => p.price);
    //Arrow function with two arguments.
    let average = prices.reduce((curr,prev) => curr + prev) / prices.length;
    average = average.toFixed(2);
    const averagePrice1 = (`Average Price : R${average}`);
    avrP[0].innerHTML = averagePrice1;

    //Total Price.
    const tvP = document.querySelectorAll("li.tv");
    //Assigning variable total.
    const total = data[0].items
    //Arrow function with two arguments.
    .map(description => description.price)
    .reduce((acc, curr) => acc + curr);
    totalP = (`Total Price : R${total}`);
    tvP[0].innerHTML = totalP;

    //Get minimum prices across all objects in the array.
    const minPrc = document.querySelectorAll("li.miP");
    prices.sort((curr,prev) => curr-prev);
    const min = prices[0];
    minValue = (`Minimum Item Price : R${min}`);
    minPrc[0].innerHTML = minValue;

    //Get maximum prices across all objects in the array.
    const maxPrc = document.querySelectorAll("li.maP");
    prices.sort((curr,prev) => curr-prev);
    const max = prices[prices.length - 1];
    maxValue =  (`Maximum Item Price : R${max}`);
    maxPrc[0].innerHTML = maxValue;

    //Total Basket value + 15% vat.
    const totalBasket = document.querySelectorAll("li.t-tax");
    let totalValue = data[0].items
    .map(description => description.price)
    .reduce((acc, curr) => acc + curr);
    totalValue += (totalValue * 0.15);
    //Rounding price to two decimals.
    totalValue = totalValue.toFixed(2);
    totalV = (`Total Basket Value : R${totalValue}`);
    totalBasket[0].innerHTML = totalV;

    //Basket 2.
    const ul2 = document.querySelector("ul.basket2");
    data[1].items.forEach(function(e){
        const li = document.createElement("li");
        li.innerHTML = e.description + " R" + e.price;
        ul2.append(li);
    });

    //Average price.
    const avrP2 = document.querySelectorAll("li.avP2");
    //Passing a function to map.
    const itemPrices = data[1].items.map(p => p.price);
    //Calculating average price.
    let averagePrice = itemPrices.reduce((a,b) => a + b) / itemPrices.length;
    averagePrice = averagePrice.toFixed(2);
    const avgPrice = (`Average Price : R${averagePrice}`);
    avrP2[0].innerHTML = avgPrice;

    //Total price.
    const tvP2 = document.querySelectorAll("li.tv2");
    //Arrow function with two arguments.
    const totalPrice = data[1].items
    .map(description => description.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
    totalPrice1 = (`Total Price : R${totalPrice}`);
    tvP2[0].innerHTML = totalPrice1;

    //Get minimum itemPrices across all objects in the array.
    const minP2 = document.querySelectorAll("li.miP2");
    itemPrices.sort((curr,prev) => curr-prev);
    const minP = itemPrices[0];
    minimumPrice1 = (`Minimum Item Price: ${minP}`);
    minP2[0].innerHTML = minimumPrice1;

    //Get maximum itemPrices across all objects in the array.
    const maxP2 = document.querySelectorAll("li.maxP2");
    itemPrices.sort((curr,prev) => curr-prev);
    const maxP = itemPrices[itemPrices.length - 1];
    maximumPrice1 = (`Maximum Item Price: ${maxP}`);
    maxP2[0].innerHTML = maximumPrice1;

    //Calculating the total basket value + 15% vat.
    const totalBasket2 = document.querySelectorAll("li.t-tax2");
    let totalValue1 = data[1].items
    .map(description => description.price)
    .reduce((acc, curr) => acc + curr);
    totalValue1 += (totalValue1 * 0.15);
    //Rounding the  price to 2 decimal.
    totalValue1 = totalValue1.toFixed(2);
    tValue =  totalValue1;
    totalBasket2[0].innerHTML = (`Total Basket Value : R${totalValue1}`);


