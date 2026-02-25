const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach(price => {
    total += parseFloat(prices.textContent);
  });

  const table = document.querySelector("table");

  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = 2;   // Span across columns
  newCell.textContent = total;

  newRow.appendChild(newCell);

  // Step 5: Append row to table
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);