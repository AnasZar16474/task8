let data = [];
document.querySelector(".form").onsubmit = function (e) {
  e.preventDefault();
  const test = e.target.elements[0].value;
  e.target.elements[0].value = "";
  data.push(test);
  const displayData = data
    .map(function (ele) {
      return `
    <div class="selector">
    <input type="checkbox">
    <span> ${ele} </span>
    </div>
     `;
    })
    .join("");
  document.querySelector(".data").innerHTML = displayData;
  const anas = document.querySelectorAll(".data input[type='checkbox']");
  for (let i = 0; i < anas.length; i++) {
    anas[i].onclick = function () {
      anas[i].nextElementSibling.classList.toggle("line");
    };
  }
};
