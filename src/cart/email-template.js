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
             :root {
            /* Colors */
            --main-green: #6c7e3e;
            --main-light-purple: #ededff;
            --main-light-purple-transparent: #e6e6fc;
            --main-light: #ead9db;
            --main-green-ligth: #d9eada;
            --light-green: #f5f5ed;
            --main-orange: #fbbf7b;
            --dark-green: #303b23;
            --brown: #b97a4e;
            --purple: rgb(133 133 177);
            --brand-color: hsl(46, 100%, 50%);
            --black: hsl(0, 0%, 0%);
            --white: hsl(0, 0%, 100%);
            --green-light: #a8975b;
            --skin-color: #d1a48d;
            /* Fonts */
            --font-title: "Montserrat", sans-serif;
            --font-text: "Lato", sans-serif;
            --border-radius-circle: 50%;
            --circle-icon-height: 37px;
            --circle-icon-width: 37px;
            }             

             body {
                  padding: 0px;
                  margin:0px;
                  display:block;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                    sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                background-color: white;
                }
            </style>
        </head>
        <body style="padding: 0; margin: 0; display:block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: white;">
        <div class="email" style="padding: 0 !important;">
            <div class="header" style="border-bottom: 1px solid #efefef; background:#f5f5f56e; height:60px; margin-bottom:60px; padding: 0 10px !important;">
                <img class="header-img" src="https://cdn-icons-png.flaticon.com/512/3944/3944068.png" style="width:50px;" />
            </div>
            <div class="cart" style="padding: 0 20px;">
                       <div class="popular-title" style="text-align: center; padding-bottom: 40px;"><h2 class="text-dark">Shopping Cart</h2>
          <p class="popular-text-min text-dark m-auto mt-2">
            Shop now and experience the natural goodness of Aloe Vera in every
            product.
          </p></div>
        <div class="res-table" style="overflow-x: auto; scroll-behavior: smooth; scrollbar-width: thin; padding: 0 0 70px 0;">
    `;

  // Checking if there are products in the cart
  if (products.length > 0) {
    emailBody += `
                    <table border="1" cellpadding="5" cellspacing="0" style="border:none; width: 80%; margin:auto;">
                        <thead>
                            <tr>
                                <th style="background-color: #dee2e65e !important; font-weight: 600; width: 500px; padding:10px; border:none;">Product</th>
                                <th style="background-color: #dee2e65e !important; font-weight: 600; width: 500px; padding:10px; border:none;">Price</th>
                                <th style="background-color: #dee2e65e !important; font-weight: 600; width: 500px; padding:10px; border:none;">Quantity</th>
                                <th style="background-color: #dee2e65e !important; font-weight: 600; width: 500px; padding:10px; border:none;">Total</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

    // Generating rows for each product
    products.forEach((product, idx) => {
      emailBody += `
                        <tr>
                            <td style="vertical-align: middle; padding:10px; border: 1px solid whitesmoke;">${product.name}</td>
                            <td style="vertical-align: middle; padding:10px; border: 1px solid whitesmoke;">${product.price}</td>
                            <td style="vertical-align: middle; padding:10px; border: 1px solid whitesmoke;">${product.quantity}</td>
                            <td style="vertical-align: middle; padding:10px; border: 1px solid whitesmoke;">${product.totalPrice}</td>
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
                    <p style="padding: 10px;">There is no product!</p>
        `;
  }

  // Closing the HTML structure
  emailBody += `
                </div>
            </div>
<footer id="footer" class="footer mt-auto pt-5 border-top" style="background: #d9eada; color: #303b23;">
    <div class="pt-lg-4 pt-0" style="padding-top: 1.5rem !important; padding: 20px;">
        <div class="pb-5" style="padding-bottom: 3.5rem !important; display:flex; justify-content:between;">
            <div style="width: 75%;">
                <h3 style="color: #303b23;">About Us</h3>
                <p style="width: 75%; color: #303b23;">
                    We are committed to providing high-quality products and excellent customer service.
                </p>
                <h3 style="color: #303b23;">Connect With Us</h3>
                <address style="display: flex; flex-direction: column !important; font-style:normal;">
                    <span>
                        Instagram:
                        <a href="https://www.instagram.com/forever_living_products_vh" target="_blank" rel="noreferrer" style="text-decoration: none; color: #303b23;">@forever_living_products_vh</a>
                    </span>
                    <span>
                        Email:
                        <a href="mailto:valdetahadzajlic@gmail.com" style="text-decoration: none; color: #303b23;">valdetahadzajlic@gmail.com</a>
                    </span>
                </address>
            </div>
            <div style="width: 68%;">
                <h3 style="color: #303b23;">Subscribe to Our Newsletter</h3>
                <div class="d-flex align-items-center justify-content-between mt-4" style="margin-top: 0.8rem !important; display:flex; justify-content:between; align-items:center; gap: 4px">
                    <div controlId="formBasicEmail" style="width: 50%;">
                        <input type="email" placeholder="Enter email" class="form-control" style="display: block; width: -webkit-fill-available; padding: 0.285rem .75rem; font-size: 0.8rem; font-weight: 400; line-height: 1.5; color: #212529; appearance: none; background-color: #fff; background-clip: padding-box; border: 1px solid #dee2e6; border-radius: 0.375rem; transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;">
                    </div>
                    <button variant="success" type="submit" class="mx-2" style="border: none; border-radius: 4px; background: #6c7e3e; color: white; padding: 7px 19px; font-size: 0.8rem;">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    <div  style="padding: 10px 0px; background: #198754; color: white; text-align:center;">
        <p class="mb-0 pb-0">
            © Forever Living Products VH. All rights reserved.
        </p>
    </div>
</footer>

    </div>
        </body>
        </html>
    `;

  return emailBody;
}
