export function generateCartEmail(products) {
  // Constructing the HTML email body
  let emailBody = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="padding: 0; margin: 0; display:block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background-color: white;">
        
        <div class="email" style="padding: 0 !important;margin:auto;">
     
            <div class="cart" style="padding: 0 10px; width: 700px">
          <div class="popular-text-min text-dark m-auto mt-2" style="text-align:justify;padding: 0 32px; padding-bottom: 71px; padding-top:20px">
          <div> Dear Customer,</div>
           <p>Thank you for choosing Forever Living Products VH for your purchase.</p>
           <p>Below is the list of items you've selected:</p>
          </div></div>
        <div class="res-table" style="overflow-x: auto; scroll-behavior: smooth; scrollbar-width: thin; padding: 0 0 22px 0;">
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
  }

  // Closing the HTML structure
  emailBody += `
  <div style="margin-top:71px;padding: 0 32px"><p> If you need to make any changes or have any questions regarding your order, please don't hesitate to contact us.

We appreciate your business and look forward to serving you again in the future.
 </p>
 <div><p  style="padding-bottom: 0px !important; margin-bottom: 0px;">Best regards,</p>
 <p>Valdeta H.</p></div>
 </div>
                </div>
           <div id="footer" class="footer mt-auto pt-5 border-top" style="background: #d9eada; color: #303b23;">
<div style="margin:auto; width: 700px">
    <div class="pt-lg-4 pt-0" style=" padding: 20px;">
        <div class="pb-5" style="display:flex; justify-content:between;">
            <div style="width:50%">
                <h3 style="color: #303b23;">About Us</h3>
                <p style="width: 75%; color: #303b23;">
                    We are committed to providing high-quality products and excellent customer service.
                </p>
            </div>
            <div style="width:50%">
            <h3 style="color: #303b23;">Connect With Us</h3>
                <div style="font-style:normal">
                    <div>
                        Instagram:
                        <a href="https://www.instagram.com/aloe_vera_vh" target="_blank" rel="noreferrer" style="text-decoration: none; color: #303b23;">@aloe_vera_vh</a>
                    </div>
                    <div>
                        Email:
                        <a href="mailto:valdetahadzajlic@gmail.com" style="text-decoration: none; color: #303b23;">aloeveravh@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div  style="padding: 1px 0px; background: #198754; color: white; text-align:center;">
        <p class="mb-0 pb-0">
            © Forever Living Products VH. All rights reserved.
        </p>
    </div>
</div>
                </div>
    </div>
        </body>
        </html>
    `;

  return emailBody;
}
