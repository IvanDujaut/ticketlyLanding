const prompt = require("prompt-sync")();

class User {
  constructor(email = "", firstName = "", lastName = "", password = "") {
    this._email = email;
    this._firstName = User._capitalizeName(firstName);
    this._lastName = User._capitalizeName(lastName);
    this._password = password;
  }

  getEmail() {
    return this._email;
  }

  setEmail(email) {
    this._email = email;
  }

  getFirstName() {
    return this._firstName;
  }

  setFirstName(firstName) {
    this._firstName = User._capitalizeName(firstName);
  }

  getLastName() {
    return this._lastName;
  }

  setLastName(lastName) {
    this._lastName = User._capitalizeName(lastName);
  }

  getPassword() {
    return this._password;
  }

  setPassword(password) {
    this._password = password;
  }

  static validateEmail(email) {
    const emailRegExp = /\S+@\S+\.\S+/;
    return emailRegExp.test(email);
  }

  static validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,14}$/;
    return regex.test(password);
  }

  static _capitalizeName(aName) {
    return aName
      .toLowerCase()
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  }

  static _buildUsers(user) {
    if (!Array.isArray(User._users)) {
      User._users = [];
    }

    const newUser = {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
    };

    User._users.push(newUser);
    return User._users;
  }

  static showUsers() {
    console.log(User._users);
  }

  static deleteUser(email) {
    const userIndex = this.users.findIndex((user) => user._email === email);
    if (userIndex === -1) {
      console.log(`No se encontró ningún usuario con el email ${email}.`);
      return;
    }
    this.users.splice(userIndex, 1);
    console.log(`Se eliminó el usuario con el email ${email} correctamente.`);
  }
}

let usersList = [];
usersList.push(new User("jhon@doe.com", "jhon", "doe", "jhonD"));
usersList.push(
  new User("armando@quito.com", "armando", "quito", "armandoQ123")
);
console.log(usersList);

function showOptions() {
  console.log(
    `
    1 - Ingresar con mi cuenta
    2 - Crear una nueva cuenta
    3 - Cerrar
    `
  );
}

function signUp() {
  /** Esta funcion no recibe ningun parametro
   * retorna una lista de usuarios actualizada,
   * agregando usuarios nuevos (signUp)
   */
  let email = prompt("Ingrese su correo electrico: ");
  let firstName = prompt("Ingrese su nombre: ");
  let lastName = prompt("Ingrese su apellido: ");
  let password = prompt("Ingrese un password: ");

  const newUser = {
    email,
    firstName,
    lastName,
    password,
  };

  usersList.push(newUser);
  return usersList;
}


function main() {
  let option = null;
  while (option != 3) {
    showOptions();
    option = parseInt(prompt("Seleccionar una opcion: "));
    if (option == 1) {
      let email = prompt("Ingrese su correo electrico: "); //prompt("Ingrese su correo electrico: ");
      let password = prompt("Ingrese su password: "); //prompt("Ingrese su password: ");
      let access = usersList.find((user) => {
        return user.getEmail() === email && user.getPassword() === password;
      })
        ? "Succes!"
        : "Algunos de los datos ingresados son incorrectos";

      console.log(access);
      //alert(access);
    } else if (option == 2) {
      console.log(signUp());
    }
  }
}

main();
