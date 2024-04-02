#!/bin/bash

# MySQL Database Information
DATABASE_USER="root"
DATABASE_PASSWORD="root"

# Create a new MySQL database
mysql -u"$DATABASE_USER" -p"$DATABASE_PASSWORD" -e "CREATE DATABASE IF NOT EXISTS ecommerce;"

# Run MySQL commands with variables
mysql -u"$DATABASE_USER" -p"$DATABASE_PASSWORD" <<EOF
ALTER USER '$DATABASE_USER'@'localhost' IDENTIFIED WITH mysql_native_password BY '$DATABASE_PASSWORD';
GRANT ALL PRIVILEGES ON ecommerce.* TO '$DATABASE_USER'@'localhost';
GRANT ALL PRIVILEGES ON ecommerce.* TO '$DATABASE_USER'@'127.0.0.1';
FLUSH PRIVILEGES;
EOF

# Grant privileges here

git clone https://github.com/omomcode/backendinitial.git

./db.sh

npm i

npm i @strapi/strapi@v4.15.0

# Run npm run develop synchronously
npm run develop &

# Continue with the rest of your script
./initiscript.sh