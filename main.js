// Meal Maker Project //

// step 1 //
let menu = {}

// step 2 //
menu.courses = {}

// step 3 //
menu.courses.appetizers = []
menu.courses.mains = []
menu.courses.desserts = []

// step 4 & 5 //
menu.addDishToCourse = function (courseName, dishName, dishPrice){
  let dish = {}
  dish.name = dishName
  dish.price = dishPrice
  if (courseName === 'appetizers' || courseName === 'mains' || courseName === 'desserts'){
    menu.courses[courseName].push(dish)
  }
}

// step 6 & 7 //
menu.getRandomDishFromCourse = function (courseName){
  let dishes = menu.courses[courseName]
  let ranDish = Math.floor(Math.random() * dishes.length)
  return dishes[ranDish]
}

// step 8 // 
menu.generateRandomMeal = function(){
let appetizer = menu.getRandomDishFromCourse('appetizers')
let main = menu.getRandomDishFromCourse('mains')
let dessert = menu.getRandomDishFromCourse('desserts')

return `You are going to eat a ${appetizer.name} for your starter. Then you going to eat a ${main.name} for your entree. Then are going to eat a ${dessert.name} for your dessert. This is going to cost you $${appetizer.price + main.price + dessert.price}.00 bucks`
}

// step 9 //
menu.addDishToCourse('appetizers', 'salad', 7)
menu.addDishToCourse('appetizers', 'soup', 6)
menu.addDishToCourse('appetizers', 'calamari', 12)

menu.addDishToCourse('mains', 'pasta', 18)
menu.addDishToCourse('mains', 'Burger', 15)
menu.addDishToCourse('mains', 'fish', 24)

menu.addDishToCourse('desserts', 'mude pie', 13)
menu.addDishToCourse('desserts', 'apple pie', 10)
menu.addDishToCourse('desserts', 'ice cream', 9)
//console.log(menu)

let meal = menu.generateRandomMeal()
console.log(meal)
