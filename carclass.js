function car(name, model, type){
	this.name = name;
	this.model = model;
	this.type = type;

 car.prototype.carClass = function(){

  var honda = new car ("Honda")
  alert(car.getInfo());
    
  var gm = new Car("name", "model");
  car.name = "General";
  car.model = "GM";
     alert(car.getInfo());
  
    var Toyota = new car("Toyota", "Corolla");
    car.name = "Toyota";
    car.type = "Corolla";
    alert(car.getinfo());

	var Opel = new car("Opel", "Omega 3", 4);
	car.name = "opel";
	car.type = "Omega 3"
	car.doors = 4
	alert(car.getinfo());

	var Porshe = new car("Porshe", "911 Turbo",doors, 250km/h);
	
	function newCar("name", "type", "doors"){
 	var name = name;
 	var type = type;
 	var doors = doors;
 	
 	return {
 		name: name
 		type: type
 		doors:doors
 	}
 	}
var man = new car("MAN", "Truck", "trailer")

	
