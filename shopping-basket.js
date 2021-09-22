const myDemo = document.body;
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

    //Average Price.
    //Passing a function to map.
    const prices = data[0].items.map(p => p.price);
    //Arrow function with two arguments.
    const average = prices.reduce((a,b) => a + b) / prices.length;
    const averagePrice1 = (`Average Price : R${average}`);

    //Total Price.
    //Assigning variable total.
    const total = data[0].items
    //Arrow function with two arguments.
    .map(description => description.price)
    .reduce((acc, curr) => acc + curr);
    totalP = (`Total Price : R${total}`);

    //Get minimum prices across all objects in the array.
    prices.sort((prev,curr) => {
        return prev.price < curr.price ? prev : curr;
    })
    const min = prices[prices.length - 1];
    minValue = ("Minimum Item Price : R" + min);

    //Get maximum prices across all objects in the array.
    prices.sort((prev,curr) => {
        return prev.price > curr.price ? prev : curr;
    })
    const max = prices[3];
    maxValue = ("Maximum Item Price : R" + max);

    //Total Basket value + 15% vat.
    let totalValue = data[0].items
    .map(description => description.price)
    .reduce((acc, curr) => acc + curr);
    totalValue += (totalValue * 0.15);
    //Rounding price to two decimals.
    totalValue = totalValue.toFixed(2);
    totalV = (`Total Basket Value : R${totalValue}`);

    const tVal = `Total Basket Value : R${totalValue}`
    const mPrice = `Total Basket Value : R${totalValue}`;

    //Basket 2.
    //Average price
    //Passing a function to map.
    const itemPrices = data[1].items.map(p => p.price);
    //Calculating average price.
    let averagePrice = itemPrices.reduce((a,b) => a + b) / itemPrices.length;
    averagePrice = averagePrice.toFixed(2);
    const avgPrice = (`Average Price : R${average}`);

    //Arrow function with two arguments.
    const totalPrice = data[1].items
    .map(description => description.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
    totalPrice1 = ("Total Price : R"+ totalPrice);

    //Get minimum itemPrices across all objects in the array.
    itemPrices.sort((previous, current) => {
        return previous.price < current.price? previous : current;
    })
    const minP = itemPrices[2];
    minimumPrice1 = ("Minimum Item Price : R" + minP);

    //Get maximum itemPrices across all objects in the array.
    itemPrices.sort((previous, current) => {
        return previous.price < current.price? previous : current;
    })
    const maxP = itemPrices[1];
    maximumPrice1 = ("Minimum Item Price : R" + maxP);

    //Calculating the total basket value + 15% vat.
    let totalValue1 = data[1].items
    .map(description => description.price)
    .reduce((acc, curr) => acc + curr);
    totalValue1 += (totalValue1 * 0.15);
    //Rounding the  price to 2 decimal.
    totalValue1 = totalValue1.toFixed(2);
    tValue = ("Total Basket Value : R"+ totalValue1);

    //Displaying data information to a web page.
    myDemo.innerHTML =  "<h1>Basket1</h1>" + averagePrice1 +  " </br>" + totalP + "</br>" + minValue + "</br>"+ maxValue + "</br>" + totalV + "<br>" + "<br>" +
    "<h1>Basket 2</h1>" + avgPrice +  " </br>" + totalPrice1 + "</br>"+ minimumPrice1+ "</br>"+ maximumPrice1 + "</br>" + tValue;


