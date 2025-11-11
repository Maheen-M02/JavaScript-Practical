let products = [];

// Render table
function showTable(data, tableId) {
  const tbody = document.querySelector(tableId + " tbody");
  tbody.innerHTML = "";
  data.forEach(p => {
    const row = `<tr class="${p.stock < 5 ? 'low-stock' : ''}">
      <td>${p.id}</td><td>${p.name}</td><td>${p.category}</td>
      <td>${p.price}</td><td>${p.stock}</td></tr>`;
    tbody.innerHTML += row;
  });
  console.log("Displayed items in", tableId, ":", data.length);
}

// Load using Fetch API
fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    showTable(products, "#fetchTable");
    fillCategories(products);
  });

// Load using jQuery
$.getJSON("products.json", data => showTable(data, "#jqueryTable"));

// Fill category dropdown
function fillCategories(data) {
  let cats = [...new Set(data.map(p => p.category))];
  const select = document.getElementById("categoryFilter");
  cats.forEach(c => select.innerHTML += `<option value="${c}">${c}</option>`);
}

// Filter by category
document.getElementById("categoryFilter").onchange = () => {
  let c = categoryFilter.value;
  let filtered = c === "all" ? products : products.filter(p => p.category === c);
  showTable(filtered, "#fetchTable");
};

// Search by name
document.getElementById("searchBox").oninput = () => {
  let txt = searchBox.value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(txt));
  showTable(filtered, "#fetchTable");
};