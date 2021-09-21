const user = {
  name: "Jones",
  lastName: "Kleber"
};

function getUserFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  }
}

const userWithFullName = getUserFullName(user);

console.log(userWithFullName);
  