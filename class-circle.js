//1)-radius:double = 1.0 -color:string = "red"                                                                                                     
    //+circle()                                                                                                

class Circle {
 
    constructor(radius = 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }

    circle() {
        console.log(`This is a circle with radius ${this.radius} and color ${this.color}`);
    }
}

const myCircle = new Circle(2.5, "blue");
myCircle.circle();




//2)-radius:double = 1.0  -color:string = "red   
//+circle(-radius:double)                                                                                                                                                                                                        +circle(radius:double)
 class Circle {
   

    constructor(radius= 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }

    // Getter for radius
    get Radius() {
        return this.radius;
    }

    // Setter for radius
    set Radius(radiusnumber)  {
        this.radius = radius;
    }

    // Method to display circle information
    circleInfo() {
        console.log(`Circle - Radius: ${this.radius}, Color: ${this.color}`);
    }
}

// Create an instance of the Circle class with a radius of 2.5
const myCircle = new Circle(2.5);
myCircle.circleInfo();

// Change the radius
myCircle.setRadius(3.0);
myCircle.circleInfo();

//3)-radius:double = 1.0     -color:string = "red
//+circle(-radius:double,color:string)                                                                                                                                                                                                            +circle(radius:double, color:string)
class Circle {
   
    constructor(radius = 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }


    getColor()  {
        return this.color;
    }

    
    setColor(color) {
        this.color = color;
    }

  
    circleInfo() {
        console.log(`Circle - Radius: ${this.radius}, Color: ${this.color}`);
    }
}

const myCircle = new Circle(2.5, "blue");
myCircle.circleInfo();
myCircle.setRadius(3.0);
myCircle.setColor("green");
myCircle.circleInfo();

//4}-radius:double = 1.0  -color:string = "red    
//+get radious():double                                                                                                                                                                                                          +getRadius():double
class Circle {
    constructor(radius = 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }


    setRadius(radius) {
        this.radius = radius;
    }

  
    getColor() {
        return this.color;
    }


    setColor(color) {
        this.color = color;
    }

    circleInfo() {
        console.log(`Circle - Radius: ${this.radius}, Color: ${this.color}`);
    }
}

const myCircle = new Circle(2.5, "blue");
const circleRadius = myCircle.getRadius();
console.log(`Circle Radius: ${circleRadius}`);

//5)radius:double = 1.0    -color:string = "red  
//+setradious(radious:double):void                                                                                                                                                                                                         +setRadius(radius:double)

class Circle {
    constructor(radius= 1.0, color= red) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    circleInfo() {
        console.log(`Circle - Radius: ${this.radius}, Color: ${this.color}`);
    }
}
const myCircle = new Circle(2.5, "blue");


//6)myCircle.setRadius(3.0);
//myCircle.circleInfo(); radius:double = 1.0                                                                                                                            +getcolor():string      -color:string ="red"                                                                           
class Circle {
    constructor(radius = 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }
    
    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    circleInfo() {
        console.log(`Circle - Radius: ${this.radius}, Color: ${this.color}`);
    }
}

const myCircle = new Circle(2.5, "blue");
const circleColor = myCircle.getColor();
console.log(`Circle Color: ${circleColor}`);

//7)radius:double = 1.0   -color:string = "red"                                                                                                                 
//+setcolor(color:string)
class Circle {
      constructor(radius = 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }
    
    setColor(color){
        this.color = color;
    }

    circleInfo() {
        console.log(`Circle - Radius: ${this.radius}, Color: ${this.color}`);
    }
}

const myCircle = new Circle(2.5, "blue");
myCircle.setColor("green");
myCircle.circleInfo();

//8)radius:double = 1.0 -color:string = "red"                                                                                                                   
//+tostring():string    
class Circle {
    constructor(radius= 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;
    }

    getColor(){
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    circleInfo() {
        console.log(`Circle - Radius: ${this.radius}, Color: ${this.color}`);
    }

    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
}
const myCircle = new Circle(2.5, "blue");
const circleString = myCircle.toString();
console.log(circleString);
      
//9)radius:double = 1.0  -color:string = "red"                                                                                                                      
//+getarea():double
class Circle {
    constructor(radius = 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }
    
    getRadius() {
        return this.radius;
    }
    
    setRadius(radius){
        this.radius = radius;
    }

    getColor(){
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

e
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    
    toString() {
        return `Circle [radius=${this.radius}, color=${this.color
    }
}
console.log( ${circleArea});

//10)radius:double = 1.0   -color:string = "red                                                                                                                      
+getCircumference():double
class Circle {
  
    constructor(radius = 1.0, color = red) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }
    
    setRadius(radius){
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color){
        this.color = color;
    }
    
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

 ation
    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
}
const myCircle = new Circle(2.5, "blue");
const circleCircumference = myCircle.getCircumference();
console.log(`Circle Circumference: ${circleCircumference}`);
