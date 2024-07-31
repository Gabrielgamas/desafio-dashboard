import { faker } from "@faker-js/faker";

const continents = ["Europa", "Ásia", "América"];

const getRandomContinent = () => {
  return faker.helpers.arrayElement(continents);
};

export const attendees = Array.from({ length: 200 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    sex: faker.person.sexType(),
    wage: faker.number.int({ min: 1000, max: 31000 }),
    nationality: getRandomContinent(),
    age: faker.number.int({ min: 18, max: 78 }),
    name: faker.person.fullName(),
  };
});
