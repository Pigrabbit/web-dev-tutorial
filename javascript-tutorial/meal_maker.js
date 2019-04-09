const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts:[],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
   	return this._courses.mains;
  },
  get desserts() {
   	return this._courses.desserts;
  },
  set appetizers(appetizersInput) {
   	this.appetizers = appetizersInput;
  },
  set mains(mainsInput) {
   	this.mains = mainsInput;
  },
  set desserts(dessertsInput) {
   	this.desserts = dessertsInput;
  },
  get courses() {
    return {
    	appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
	addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
			name: dishName,
			price: dishPrice,
		};
    
		switch(courseName) {
      case 'appetizers':
        this._courses['appetizers'].push(dish);
        break;
      case 'mains':
        this._courses['mains'].push(dish);
        break;
      case 'desserts':
        this._courses['desserts'].push(dish);
        break;
    }
  },
	getRandomDishFromCourse(courseName) {
		const dishes = this._courses[courseName];
		const randomIndex = Math.floor(Math.random() * dishes.length);
    
		return dishes[randomIndex];
	},
	generateRandomMeal() {
		const appetizer = this.getRandomDishFromCourse('appetizers');
		const main = this.getRandomDishFromCourse('mains');
		const dessert = this.getRandomDishFromCourse('desserts');

		const totalPrice = appetizer.price + main.price + dessert.price;
		      
		return {
			'Appetizer': appetizer.name,
			'Main': main.name,
			'Dessert': dessert.name,
			'Price': totalPrice,
		};
	}
};

menu.addDishToCourse('appetizers', 'caesar salad', 10);
menu.addDishToCourse('appetizers', 'broccoli cheese soup', 6);
menu.addDishToCourse('appetizers', 'clam chouder', 8);
menu.addDishToCourse('mains', 'sirloin steak', 20);
menu.addDishToCourse('mains', 'bolognese pasta', 15);
menu.addDishToCourse('mains', 'fungi risotto', 16);
menu.addDishToCourse('desserts', 'chocolate cake', 5);
menu.addDishToCourse('desserts', 'tiramisu', 6);

let meal = menu.generateRandomMeal();
console.log(meal);
