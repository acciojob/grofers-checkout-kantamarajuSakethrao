const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // Step 1: Select all price elements
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  // Step 2: Calculate total
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Step 3: Select the table
  const table = document.querySelector("table");

  // Step 4: Create new row and cell
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  newCell.colSpan = 2;   // Span across columns
  newCell.textContent = total;

  newRow.appendChild(newCell);

  // Step 5: Append row to table
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);