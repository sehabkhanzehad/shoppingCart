var itmeUp = document.getElementById("itemUp");

itmeUp.addEventListener("click", function () {
  const input = document.getElementById("form1").value;
  const parseIput = parseInt(input);
  document.getElementById("form1").value = parseIput + 1;

  document.getElementById("itemDown").disabled = false;

  const price = document.getElementById("price1").innerText;
  const parsePrice = parseInt(price);
  const total = parsePrice + 1320;
  document.getElementById("price1").innerText = total;
});

var itmeDown = document.getElementById("itemDown");

itmeDown.addEventListener("click", function () {
  const input = document.getElementById("form1").value;
  const parseInput = parseInt(input);

  if (parseInput > 1) {
    document.getElementById("form1").value = parseInput - 1;

    const price = document.getElementById("price1").innerText;
    const parsePrice = parseInt(price);
    const total = parsePrice - 1320;
    document.getElementById("price1").innerText = total;
  } else {
    document.getElementById("itemDown").disabled = true;
  }
});
