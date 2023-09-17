interface Bikes {
  model: number;
  milage: number;
}
interface Cars {
  model: number;
  milage: number;
}

interface Plane {
  model: number;
  milage: number;
  speed: number;
}

interface Bus {
  model: number;
  engine_milage: number;
}

const Koneisegg: Cars = {
  model: 2021,
  milage: 13,
};
const NinjaH2R: Bikes = {
  model: 2022,
  milage: 10,
};
const JF17: Plane = {
  model: 2023,
  milage: 15,
  speed: 135,
};

const bus: Bus = {
  model: 2021,
  engine_milage: 12,
};

function engEfficeiency(car: Cars) {
  console.log(car);
}

//We can pass both a car or a bike or a plane cause they both have the
// minimal properties for the required function

//lexus = JF17 (can be done)
// JF17!= lexus (cannot be done)
//as bus has a different property so it cannot be passed

let x: { id: number; [x: string]: any };
//The second element key is a string and it can have any type as its property

x = { id: 12, name: "Ahmad" };
let y = { id: 10, address: "abc" };
let z = { id: 11, area: 500 };

// x=y Possible
// x=z Possible
// y=z Not Possible
// y=x Not Possible
