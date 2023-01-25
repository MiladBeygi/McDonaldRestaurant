const foods = document.querySelector(".foods");
const totalSumPrice = document.querySelector('.total-sum-price');
const discountPrice = document.querySelector('.discount-price');
const servicesPrice = document.querySelector('.service-price');
const allFoodPrice = document.querySelector('.allfoods-sum-price');
const discountField = document.getElementById("discount");



class Foods {
    constructor(id, foodName, foodPrice, imgSrc) {
        this.id = id;
        this.foodName = foodName;
        this.foodPrice = foodPrice;
        this.imgSrc = imgSrc;
    }
};
const foodArray = [new Foods(1, "همبرگر معمولی", 10000, 'img/burger.jpg'), new Foods(2, "همبرگر مخصوص", 25000, 'img/burger.jpg'), new Foods(3, "همبرگر مخصوص با قارچ و پنیر", 35000, 'img/burger.jpg'), new Foods(4, "همبرگر معمولی با قارچ و پنیر", 30000, 'img/burger.jpg'), new Foods(5, 'سیب زمینی سرخ کرده', 10000, 'img/french-fries.jpg'), new Foods(6, 'سیب زمینی سرخ کرده ویژه', 25000, 'img/french-fries.jpg'), new Foods(7, 'نوشابه', 5000, 'img/COCA.png'), new Foods(8, 'نوشابه رژیمی', 6000, 'img/COCA.png'), new Foods(9, 'سالاد سزار ', 25000, 'img/Caesar_salad.jpg'), new Foods(10, 'سالاد فصل ', 8000, 'img/salad.jpg')];
function render() {
    let str = '';
    foodArray.forEach(element => {
        str += `<div id=${element.id} class="card row justify-space-between col-5-xl col-5-lg col-12-md col-12-sm col-12-sm m-2">
        <div class="col-4-xl">
            <img src=${element.imgSrc} alt="burger">
        </div>
        <div class="col-6-xl">
            <h5>${element.foodName}</h5>
            <p><span class="each-price">${element.foodPrice}</span> تومان</p>
            <div>
                <button class="plus" onclick="increase('${element.id}')">+</button><span
                    class="number">0</span><button class="minus" onclick="decrease('${element.id}')">-</button>
            </div>
        </div>
        <div>
            <p><span class="sum-price"> 0 </span> تومان </p>
        </div>
    </div>`;
    });
    foods.innerHTML = str;
}
render();
function increase(e) {
    const elem = foodArray.find((el) => el.id === Number(e));
    let orderNumber = document.getElementById(`${elem.id}`).querySelector('.number');
    orderNumber.textContent = Number(orderNumber.textContent) + 1;

    let orderSumPrice = document.getElementById(`${elem.id}`).querySelector('.sum-price');
    orderSumPrice.textContent = Number(orderNumber.textContent) * elem.foodPrice;

    allFoodPrice.textContent = Number(allFoodPrice.textContent) + elem.foodPrice;

    servicesPrice.textContent = Number(allFoodPrice.textContent) * 0.05;

    totalSumPrice.textContent = Number(allFoodPrice.textContent) + Number(servicesPrice.textContent) - Number(discountPrice.textContent);
}
function decrease(e) {
    const elem = foodArray.find((el) => el.id === Number(e));
    const orderNumber = document.getElementById(`${elem.id}`).querySelector('.number');
    if (Number(orderNumber.textContent) > 0) {
        orderNumber.textContent = Number(orderNumber.textContent) - 1;

        const orderSumPrice = document.getElementById(`${elem.id}`).querySelector('.sum-price');
        orderSumPrice.textContent = Number(orderNumber.textContent) * elem.foodPrice;
        allFoodPrice.textContent = Number(allFoodPrice.textContent) - elem.foodPrice;
        servicesPrice.textContent = Number(allFoodPrice.textContent) * 0.05;
        totalSumPrice.textContent = Number(allFoodPrice.textContent) + Number(servicesPrice.textContent) - Number(discountPrice.textContent);
    }
}
function verifier() {
    if (discountField.value === 'takhfif50darsad') {

        discountPrice.textContent = (Number(allFoodPrice.textContent) + Number(servicesPrice.textContent)) / 2;
        totalSumPrice.textContent = Number(allFoodPrice.textContent) + Number(servicesPrice.textContent) - Number(discountPrice.textContent);
    } else {
        alert("کد تخفیف اشتباه است دوباره امتحان کنید")
    }
}
function confirmOrder() {
    if (Number(totalSumPrice.textContent)) {
        document.querySelector(".conatiner").classList.add("blur");
        document.querySelector(".my-modal").classList.remove("hidden-modal");
    } else {
        alert("شما هنوز سفارشی ثبت نکرده اید")
    }
}
function reloadPage() {
    location.reload()
}
