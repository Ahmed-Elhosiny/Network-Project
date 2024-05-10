# User : https://network-project-yv6p.onrender.com/users

1. Get All Users and Create User [POST] : /
   - with create user, send: name, email, password
2. Get,Delete,Update User : /:userId [GET, DELETE, PATCH]
3. login : /login [POST]
   - send: email, password

# Prdouct : https://network-project-yv6p.onrender.com/prdoucts

1. Get All products and create a product [POST] : /
   - with create product, send: name, price, quantity (OPTIONAL)
2. Get,Delete,Update product : /:productId [GET, DELETE, PATCH]

# Review : https://network-project-yv6p.onrender.com/reviews

1. Get All reviews [GET] and create review [POST] on a product : /
   - with create review, send: review, user, product
   - user and product are the Ids
2. Get,Delete,Update reviews : /:reviewId [GET, DELETE, PATCH]
