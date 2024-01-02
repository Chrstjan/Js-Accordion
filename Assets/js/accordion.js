const productContainer = document.getElementById("accordions");

const productsArray = [
  "Product One",
  "Product Two",
  "Product Three",
  "Product Four",
];

const createProducts = () => {
  productsArray.forEach((product) => {
    const accordionContainer = document.createElement("article");
    accordionContainer.classList.add("product");
    const accordionHeader = document.createElement("header");
    const accordionHeaderText = document.createElement("h2");
    accordionHeaderText.textContent = product;

    accordionHeader.appendChild(accordionHeaderText);
    accordionContainer.appendChild(accordionHeader);

    const productDescContainer = document.createElement("div");
    productDescContainer.classList.add("product-desc");

    const productDescOne = document.createElement("p");
    productDescOne.textContent =
      "facere placeat, sed enim possimus quae quis vel aliquam eum quod porro?";
    const productDescTwo = document.createElement("p");
    productDescTwo.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam iure reiciendis, nemo consequuntur voluptatem! Nostrum sit ipsam";

    const productDescFooter = document.createElement("footer");
    const productDescLink = document.createElement("a");
    productDescLink.textContent = "Order Product";

    productDescFooter.appendChild(productDescLink);

    const appendChildren = (parent, elements) => {
      elements.forEach((element) => {
        parent.appendChild(element);
      });
    };

    appendChildren(productDescContainer, [
      productDescOne,
      productDescTwo,
      productDescFooter,
    ]);

    accordionContainer.appendChild(productDescContainer);

    accordionHeader.addEventListener("click", () => {
      productDescContainer.classList.toggle("show-desc");
    });

    productContainer.appendChild(accordionContainer);
  });
};

window.addEventListener("load", createProducts);
