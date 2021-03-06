const data = [
    {
        code: "basket1",
        description: "basket 1",
        items: [
            {
                description: "apples",
                price: "R10.12"
            },
            {
                description: "bread",
                price: "R12.15"
            },
            {
                description: "rice",
                price: "R15.08"
            },
            {
                description: "potatoes",
                price: "R23"
            },
            {
                description: "chillies",
                price: "R0.50"
            }
        ]
    },
    {
        code: "basket2",
        description: "basket 2",
        items: [
            {
                description: "coke",
                price: "R19.26"
            },
            {
                description: "flour",
                price: "R24.00"
            },
            {
                description: "cheese",
                price: "R15.16"
            }
        ]
    }
];
// const search = document.querySelector(".filter-input");
// search.addEventListener("input", filter);
calculate = () => {
    const dataStructure = [];

    for (const basket of data) {
        const basketData = {};
        basketData.key = basket.code;
        basketData.title = basket.description;

        //Average Price.
        const prices = basket.items.map(p => parseFloat(p.price.replace("R", "")));
        //Arrow function with two arguments.
        let average = prices.reduce((curr, prev) => curr + prev) / prices.length;
        average = average.toFixed(2);
        basketData.averagePrice = average;

        //Total Price.
        //Assigning variable total.
        const total = basket.items
            .map(description => parseFloat(description.price.replace("R", "")))
            .reduce((acc, curr) => acc + curr);
        basketData.totalPrice = total;

        //Get minimum prices across all objects in the array.
        prices.sort((curr, prev) => curr - prev);
        const min = prices[0];
        basketData.minimum = min;

        //Get maximum prices across all objects in the array.
        prices.sort((curr, prev) => curr - prev);
        const max = prices[prices.length - 1];
        basketData.maximum = max;

        //Total Basket value + 15% vat.
        let totalValue = basket.items
            .map(description => parseFloat(description.price.replace("R", "")))
            .reduce((acc, curr) => acc + curr);
        totalValue += (totalValue * 0.15);
        //Rounding price to two decimals.
        totalValue = totalValue.toFixed(2);
        basketData.totalValueTax = totalValue;
        dataStructure.push(basketData);
    }
    return dataStructure;
}

render = dataStructure => {
    const myList = document.querySelector("#itemList");
    let id = 1;
    for (const basket of dataStructure) {
        const li = document.createElement("li");
        li.innerText = basket.title;

        const basketData = data.find((item) => item.code === basket.key);
        const basketItemList = document.createElement("ul");
        basketItemList.classList.add("basket-items");
        basketItemList.setAttribute("id", `basket${id}`);
        id++;
        for (const item of basketData.items) {
            const basketItem = document.createElement("li");
            basketItem.innerText = `${item.description} ${item.price}`
            basketItemList.appendChild(basketItem);
        }
        li.appendChild(basketItemList);

        const summaryList = document.createElement("ul");
        summaryList.classList.add("summary-list");

        //Display average price.
        const averageListItem = document.createElement("li");
        averageListItem.innerText = `Average Price R${basket.averagePrice}`

        //Display total price.
        const totalListItem = document.createElement("li");
        totalListItem.innerText = `Total Price R${basket.totalPrice}`

        //Display minimum price.
        const minimumListItem = document.createElement("li");
        minimumListItem.innerText = `Minimum Price R${basket.minimum}`

        //Display maximum price.
        const maximumListItem = document.createElement("li");
        maximumListItem.innerText = `Maximum Price R${basket.maximum}`

        const totalValueListItem = document.createElement("li");
        totalValueListItem.innerText = "Total Basket value + 15% vat R" + basket.totalValueTax;

        summaryList.appendChild(averageListItem);
        summaryList.appendChild(totalListItem);
        summaryList.appendChild(minimumListItem);
        summaryList.appendChild(maximumListItem);
        summaryList.appendChild(totalValueListItem);
        li.appendChild(summaryList);
        myList.appendChild(li);

    }
}

//Calling a function.
const dataStructure = calculate();
render(dataStructure);

const removeItemButton = document.querySelector("#button");
removeItemButton.addEventListener("click", () => {
    const list1 = document.querySelector("#basket1");
    const list2 = document.querySelector("#basket2");
    let entry;
    if (list1.childNodes[3] != null) {
        entry = list1.childNodes[3];
    }
    if (entry.innerText.includes("potatoes") === true) {
        list1.removeChild(entry);
        list2.appendChild(entry);
    }

});

//Search items

const input = document.querySelector("input");
const  list1 = document.querySelector("#basket1");

const filter = () => {
     const listItems = (li) => {
        search = input.value.toLowerCase();
        found = text.indexOf(search);

        if (search == "" || found != 1) {
            li.style.display = "block";
        }
        else{
            li.style.display = "none";
        }
    }
}
input.addEventListener("input", filter);



