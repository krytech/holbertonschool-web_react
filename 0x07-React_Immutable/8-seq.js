import { Seq } from 'immutable';

const printBestStudents = (grades) => {
  const filteredPerson = Seq(grades)
    .filter((person) => person.score >= 70)
    .map((person) => ({
      ...person,
      firstName: `${person.firstName[0].toUpperCase()}${person.firstName.slice(
        1
      )}`,
      lastName: `${person.lastName[0].toUpperCase()}${person.lastName.slice(
        1
      )}`,
    }))
    .toObject();
  console.log(filteredPerson);
  return filteredPerson;
};

export default printBestStudents;
