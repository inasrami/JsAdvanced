function CarFactory(order) {
  const car = {
    model: order.model,
    engine: null,
    carriage: null,
    wheels: null,
  };

  if (order.power <= 90) {
    car.engine = { power: 90, volume: 1800 };
  } else if (order.power <= 120) {
    car.engine = { power: 120, volume: 2400 };
  } else {
    car.engine = { power: 200, volume: 3500 };
  }

  car.carriage = { type: order.carriage, color: order.color };

  const size =
    order.wheelsize % 2 !== 0 ? order.wheelsize : order.wheelsize - 1;
  car.wheels = [size, size, size, size];

  return car;
}

console.log(
  CarFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
