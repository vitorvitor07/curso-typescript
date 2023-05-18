// Type null and unefined

function createPerson(
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return { firstName, lastName };
}

console.log(createPerson("Vitor", "Silva"));
