const htmlButton = document.getElementById("htmlButton");
const cssButton = document.getElementById("cssButton");
const jsButton = document.getElementById("jsButton");
const graphicsButton = document.getElementById("graphicsButton");
const designButton = document.getElementById("designButton");
const embeddedButton = document.getElementById("embeddedButton");
const documentationButton = document.getElementById("documentationButton");
const cButton = document.getElementById("cButton");
const javaButton = document.getElementById("javaButton");

function showAlert(message) {
  alert(message);
}

htmlButton.addEventListener("click", function () {
  showAlert(
    "HTML is the standard markup language used to create and structure content on the World Wide Web. "
  );
});

cssButton.addEventListener("click", function () {
  showAlert(
    "CSS is a language used for describing the presentation and style of a web page "
  );
});

jsButton.addEventListener("click", function () {
  showAlert(
    "JavaScript is a versatile programming language used for creating dynamic and interactive web content. "
  );
});

graphicsButton.addEventListener("click", function () {
  showAlert(
    "Graphics are used to enhance the visual appeal of websites, presentations, advertisements, and other forms of communication."
  );
});

designButton.addEventListener("click", function () {
  showAlert(
    " In web design, this involves creating layouts, selecting colors, choosing typography, and arranging graphical elements to create an aesthetically pleasing and user-friendly experience."
  );
});

embeddedButton.addEventListener("click", function () {
  showAlert(
    " The process of integrating and optimizing hardware and software components to create a cohesive system within a larger device or application, often with limited resources and space."
  );
});

documentationButton.addEventListener("click", function () {
  showAlert(
    " Written or visual materials that provide information, instructions, and explanations about a product, process, or system, aiding users in understanding and effectively using it."
  );
});

cButton.addEventListener("click", function () {
  showAlert(
    " An object-oriented programming language developed by Microsoft, primarily used for building Windows applications and web services."
  );
});



javaButton.addEventListener("click", function () {
  showAlert(
    " A widely-used, platform-independent programming language known for its (write once, run anywhere) capability, suitable for various applications such as web, mobile, and enterprise software development."
  );
});
