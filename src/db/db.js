import pizzaImg from "../images/pizza.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    { title: "Пицца", price: 60000, Image: pizzaImg, id: 1 },
    { title: "Бургер", price: 35000, Image: burgerImg, id: 2 },
    { title: "Кока-кола", price: 15000, Image: cocaImg, id: 3 },
    { title: "Кебаб", price: 24000, Image: kebabImg, id: 4 },
    { title: "Салат", price: 27000, Image: saladImg, id: 5 },
    { title: "Вода", price: 5000, Image: waterImg, id: 6 },
    { title: "Мороженное", price: 8000, Image: iceCreamImg, id: 7 },
  ];
}
