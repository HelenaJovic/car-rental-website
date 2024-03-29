class Vehicle {
  constructor(
    id,
    brand,
    model,
    price,
    carType,
    rentalObject,
    transType,
    fuelType,
    consumption,
    doorsNum,
    peopleNum,
    description,
    image,
    status
  ) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.carType = carType;
    this.rentalObject = rentalObject;
    this.transType = transType;
    this.fuelType = fuelType;
    this.consumption = consumption;
    this.doorsNum = doorsNum;
    this.peopleNum = peopleNum;
    this.description = description;
    this.image = image;
    this.status = status;
  }
}

module.exports = Vehicle;
