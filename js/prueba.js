/*----Para desplegar el menu en la seccion mobile ----*/
const navToggle = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menu_visible");
});

/**
 * Clase User, metodos y funciones
 */
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

let usersList = [
  new User("jhon@doe.com", "jhon", "doe", "jhonD"),
  new User("armando@quito.com", "armando", "quito", "armandoQ123")
]

const findUser = (arr, filterType, filterValue) => {
  let encontrado;

  switch (filterType) {
    case 'email':
      encontrado = arr.filter(user => user._email.includes(filterValue));
      break;
    case 'password':
      encontrado = arr.filter(user => user._password.includes(filterValue));
      break;
    default:
      encontrado = [];
  }

  return encontrado;
}

console.log(usersList);

/**
 * Clase Product, metodos y funciones
 */
class Product {
  constructor(productName = "", price = 0, description = "", img = '', color = [], size = [], gender = '') {
    this._productName = productName;
    this._price = price;
    this._description = description;
    this._img = img;
    this._color = color;
    this._size = size;
    this._gender = gender;
  }

  getProductName() {
    return this._productName;
  }

  setProductName(productName) {
    this._productName = productName;
  }

  getPrice() {
    return this._price;
  }

  setPrice(price) {
    this._price = price;
  }

  getDescription() {
    return this._description;
  }

  setDescription(description) {
    this._description = description;
  }

  getImg() {
    return this._img;
  }

  setImg(img) {
    this._img = img;
  }

  getColor() {
    return this._color;
  }

  setColor(color) {
    this._color = color;
  }

  getSize() {
    return this._size;
  }

  setSize(size) {
    this._size = size;
  }

  getGender() {
    return this._gender;
  }

  setGender(gender) {
    this._gender = gender;
  }
}

let productsList = [
  new Product(
    "Zapatillas L-Spin Deluxe",
    81,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco"],
    [40],
    "Hombre"
  ),
  new Product(
    "Zapatillas L004",
    85,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "celeste"],
    [41],
    "Hombre"
  ),
  new Product(
    "Zapatillas 080",
    85,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "azul"],
    [44],
    "Hombre"
  ),
  new Product(
    "Zapatillas Jump Serve Lace",
    74,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["rosado", "naranja"],
    [35, 36, 37, 38, 39, 40],
    "Mujer"
  ),
  new Product(
    "Zapatillas B53",
    85,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "rosado"],
    [35, 37, 38],
    "Mujer"
  ),
  new Product(
    "Zapatillas Match Break",
    143,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "azul"],
    [39, 40, 41, 42, 43, 44],
    "Hombre"
  ),
  new Product(
    "Zapatillas 2Q9",
    99,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "celeste"],
    [38, 39],
    "Mujer"
  ),
  new Product(
    "Zapatillas L-Spin de tela",
    122,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "verde", 'gris'],
    [39, 40, 41, 42, 43, 44],
    "Hombre"
  )
]

//metodo de busqueda por propiedad
const findProductBy = (arr, filterType, filterValue) => {
  let encontrado;

  switch (filterType) {
    case 'color':
      encontrado = arr.filter(product => product._color.includes(filterValue));
      break;
    case 'size':
      encontrado = arr.filter(product => product._size.includes(filterValue));
      break;
    case 'gender':
      encontrado = arr.filter(product => product._gender.includes(filterValue));
      break;
    case 'price':
      encontrado = arr.filter(product => product._price <= filterValue);
      break;
    default:
      encontrado = [];
  }

  return encontrado;
};

console.log(productsList);



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

  const newUser = new User (email, firstName, lastName, password);

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
        return user._email === email && user._password === password;
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

//main();
let productsList2 = [
  new Product(
    "Zapatillas L-Spin Deluxe",
    81,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco"],
    [40],
    "Hombre"
  ),
  new Product(
    "Zapatillas L004",
    85,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "celeste"],
    [41],
    "Hombre"
  ),
  new Product(
    "Zapatillas 080",
    85,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "azul"],
    [44],
    "Hombre"
  ),
  new Product(
    "Zapatillas Jump Serve Lace",
    74,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["rosado", "naranja"],
    [35, 36, 37, 38, 39, 40],
    "Mujer"
  ),
  new Product(
    "Zapatillas B53",
    85,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "rosado"],
    [35, 37, 38],
    "Mujer"
  ),
  new Product(
    "Zapatillas Match Break",
    143,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "azul"],
    [39, 40, 41, 42, 43, 44],
    "Hombre"
  ),
  new Product(
    "Zapatillas 2Q9",
    99,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "celeste"],
    [38, 39],
    "Mujer"
  ),
  new Product(
    "Zapatillas L-Spin de tela",
    122,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa pretium lacus dapibus condimentum a nec nulla. Sed iaculis pretium mauris, eget commodo sapien tincidunt quis. Nam dictum metus auctor, pulvinar risus a, commodo nulla. Pellentesque luctus dolor eu pharetra semper. Vestibulum vehicula, lorem accumsan viverra rhoncus, ipsum nisi suscipit nisl, eu venenatis massa urna sed augue. Morbi accumsan pharetra arcu. Nunc non ligula enim. Pellentesque malesuada faucibus massa.",
    "../images/product1.avif",
    ["blanco", "verde", 'gris'],
    [39, 40, 41, 42, 43, 44],
    "Hombre"
  )
]