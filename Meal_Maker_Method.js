const menu = {
    _meal : '', // this will hold the value of the meal 
    _price : 0, // _ b4 the property means not altered 

// create settters method to check value of meal & price 
    set meal(mealToCheck) {
        if(typeof mealToCheck === 'string'){
            return this._meal = mealToCheck;

        }
    },
    set price(priceToCheck){
        if(typeof priceToCheck === 'number'){
            return this._price = priceToCheck;
        };
    },
// create getter method to check if the properties value exist
    get todaysSpecial () {
        if(this._meal && this._price){
            return 'Today’s Special is Spaghetti for $5!'
        } else {
            return 'Meal or price was not set correctly!'
        };
    }
 
    
}
menu.meal = 'Pho Tien Thanh';
menu.price = '25';
console.log(menu.todaysSpecial);
/*menu._meal = 25;
menu.price = 'Pho Tien Thanh';
console.log(menu);*/