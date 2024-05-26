import topProductBySales from './topProductBySales.json' assert { type: 'json' };

console.log(topProductBySales);

// Sort the products by total_sales in descending order and get the top 5
const top5Products = topProductBySales.sort((a, b) => b.total_sales - a.total_sales).slice(0, 5);

// Get the tbody element where the data will be inserted
const tbody = document.getElementById('valData');

// Create and append rows for each product in the top 5
top5Products.forEach(product => {
   const row = document.createElement('tr');

   const productName = document.createElement('td');
   productName.textContent = product.product;
   row.appendChild(productName);

   const location = document.createElement('td');
   location.textContent = product.location;
   row.appendChild(location);

   const sold = document.createElement('td');
   sold.textContent = parseFloat(product.total_sales).toLocaleString();
   row.appendChild(sold);

   tbody.appendChild(row);
});
