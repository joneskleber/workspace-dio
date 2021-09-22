let user = {
  name: 'Jones'
};

// Alterando a propriedade de um objeto
user.name = 'Jones Kleber';
user['name'] = 'Jhoyce Kelly';

const prop = 'name';
user[prop] = 'name 2';

// Criando uma propriedade de um objeto
user.lastName = 'Santos';

// Delete uma propriedade de um objeto
delete user.name;