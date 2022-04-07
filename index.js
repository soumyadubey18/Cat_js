class Cat {
  constructor(name, weight, height, color,life_span,friendly) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.color = color;
    this.life_span= life_span;
    this.friendly=friendly;
  }
}

class BirmanCat extends Cat {
  constructor(name, weight, height, color,life_span,friendly) {
     super(name, weight, height, color,life_span,friendly);
  }
}

let bc1 = new BirmanCat("Ollie", "10kg", "2'4", "brown","12-14","yes");

console.log(bc1);
