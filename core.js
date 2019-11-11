class Product {
    constructor(name,calorie) {
        this.title = name;
        this.calories = calorie;
    }

}

class Dish {
    constructor(Name) {
        this.title = Name;
        this.dish = [];
    }
    addProduct(product,gramm){
        this.dish.push({...product, gramm:gramm})
    }
    getCalories() {
        let multiply = 0;
        for (let i = 0; i < this.dish.length; i++) {
            multiply+= (this.dish[i].calories / 100) * this.dish[i].gramm;
        }
        return multiply;
    }
}

class CaloriesCalculator {
    constructor() {
        this.dishes = [];
    }
    addDish(dishName) {
        this.dishes.push(dishName);
    }
    getTotalCalories() {
        let multiply = 0;
        for (let i = 0; i < this.dishes.length; i++) {
            let some = this.dishes[i].dish;
            for (let j = 0; j < some.length; j++) {
                multiply += (some[j].calories / 100) * some[j].gramm;
            }
        }
        return multiply;
    }
    getAllDishesInfo() {
        for (let i = 0; i < this.dishes.length; i++) {
            let title = this.dishes[i].title;
            console.log(title);
            let totalDish = this.dishes[i].dish;

            for (let j = 0; j < totalDish.length; j++) {
                console.log(totalDish[j].title + ', ' + totalDish[j].gramm + 'гр, ' + totalDish[j].calories + 'ккал');
            }
        }
    }
}

const meat = new Product('Филе говядина', 158);
const rice = new Product('Рис', 130);
const onion = new Product('Лук', 40);
const carrot = new Product('Морковь', 41);
const plov = new Dish('Плов');

plov.addProduct(meat, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);
console.log(plov.getCalories());

const calculator = new CaloriesCalculator();
calculator.addDish(plov);
const calories = calculator.getTotalCalories();
console.log(calories);
const totals = calculator.getAllDishesInfo();
console.log(totals);