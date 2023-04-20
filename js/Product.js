const prompt = require("prompt-sync")();

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

//console.log(productsList);

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

// console.log('Encontrado por color', findProductBy(productsList, 'color' , 'naranja'));
// console.log('Encontrado por size', findProductBy(productsList, 'size', 40));
// console.log('Encontrado por genero', findProductBy(productsList, 'gender', 'muj'));

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

let carrito = [];

productsList2.forEach((product) => {
    let content = document.createElement("div");

    content.innerHTML = `
        <img src = "${product._img}">
        <h3>${product._productName}</h3>
        <p>${product._price}</p>
    `;
});

productsList2.forEach((product) => {
    console.log(product._img);
})