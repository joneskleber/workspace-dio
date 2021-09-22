let user = {
  name: 'Jones'
};
console.log(user);

// Alterando a propriedade de um objeto
user.name = 'Jones Kleber';
console.log(user);

user['name'] = 'Jhoyce Kelly';
console.log(user);

const prop = 'name';
user[prop] = 'name 2';
console.log(user);

// // Criando uma propriedade de um objeto
user.lastName = 'Santos';
console.log(user);

// // Delete uma propriedade de um objeto
delete user.name;
console.log(user);
