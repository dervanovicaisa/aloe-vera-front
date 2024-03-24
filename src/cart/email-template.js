export function generateCartEmail(products) {
  // Constructing the HTML email body
  let emailBody = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Shopping Cart</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                .cart {
                padding: 0px;
                }
                .res-table {
                /* box-shadow: var(--bs-box-shadow-lg); */
                overflow-x: auto;
                scroll-behavior: smooth;
                scrollbar-width: thin;
                padding: 0px 0px 70px 0px;
                }
                .cart table th:first-child {
                border-left: unset;
                }
                .cart table th {
                background-color: #dee2e65e !important;
                font-weight: 400;
                border-left: 1px solid var(--bs-dark-bg-subtle);
                width: 500px;
                }

                .cart table td {
                vertical-align: middle;
                }
                .cart .product-image {
                width: 150px;
                }
                .quantity {
                text-align-last: center;
                }
            </style>
        </head>
        <body>
            <div class="cart">
                <div class="res-table">
    `;

  // Checking if there are products in the cart
  if (products.length > 0) {
    emailBody += `
                    <table border="1" cellpadding="5" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

    // Generating rows for each product
    products.forEach((product, idx) => {
      emailBody += `
                        <tr>
                            <td>${product.name}</td>
                            <td>${product.price}</td>
                            <td>${product.quantity}</td>
                            <td>${product.totalPrice}</td>
                        </tr>
            `;
    });

    emailBody += `
                        </tbody>
                    </table>
        `;
  } else {
    // Displaying a message if there are no products
    emailBody += `
                    <p>There is no product!</p>
        `;
  }

  // Closing the HTML structure
  emailBody += `
                </div>
            </div>
        </body>
        </html>
    `;

  return emailBody;
}
