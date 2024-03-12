import requests
from bs4 import BeautifulSoup
import json

# Fetch the webpage content
url = 'https://flpshop.me/forever-fit.html'
response = requests.get(url)
html_content = response.text

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Find all product items
product_items = soup.find_all('div', class_='product-box')

# Initialize a list to store product data
products = []

# Extract information for each product
for item in product_items:
    name = item.find('a', class_='').text.strip()
#     description = item.find('div', class_='elementor-image-box-description').text.strip()
    price = item.find('span', class_='price').text.strip()
    image_url = item.find('img')['src']

    product = {
        'name': name,
#         'description': description,
        'price': price,
        'image_url': image_url
    }

    products.append(product)

# Convert product data to JSON
json_data = json.dumps({'products': products}, indent=2, ensure_ascii=False)

# Print or save the JSON data
print(json_data)

