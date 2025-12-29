car1 =
{
brand: 'Toyota',
model: 'Corolla',
year: 2018,
};

car2=
{
brand: 'Volkswagen',
model: 'Passat',
owner: 'Carl',
};

const car3 = {
  ...car1,
  ...car2
};

console.log(car3);


