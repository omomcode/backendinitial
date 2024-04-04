#!/bin/bash

# root user is the user who can grant privileges
export DATABASE_USER="zezanje"
export DATABASE_PASSWORD="root"
export DATABASE_NAME="ekomerc"
export DUMP_NAME="ecommerce-20240402184403"
export DATABASE_HOST="localhost"
export DB_ROOT_USER="root"
export DB_ROOT_PASSWORD="root"
export STRAPI_USER_FIRSTNAME="Misha"
export STRAPI_USER_LASTNAME="Zhivanko"
export STRAPI_USER_EMAIL="tihiway@outlook.com"
export STRAPI_USER_PASSWORD="StrongPassword"
export protocol="http"
export hostname="localhost"
export port="1337"

if [ "$DATABASE_HOST" = "localhost" ]; then
  sed -i 's/DATABASE_HOST=.*/DATABASE_HOST=127.0.0.1/' .env
else
  sed -i "s/DATABASE_HOST=.*/DATABASE_HOST=$DATABASE_HOST/" .env
fi
sed -i "s/DATABASE_NAME=.*/DATABASE_NAME=$DATABASE_NAME/" .env
sed -i "s/DATABASE_USERNAME=.*/DATABASE_USERNAME=$DATABASE_USER/" .env
sed -i "s/DATABASE_PASSWORD=.*/DATABASE_PASSWORD=$DATABASE_PASSWORD/" .env
if [ "$hostname" = "localhost" ]; then
  sed -i 's/^HOST=.*/HOST=0.0.0.0/' .env
else
  sed -i "s/^HOST=.*/HOST=$hostname/" .env
fi
sed -i "s/^PORT=.*/PORT=$port/" .env

if [ "$DATABASE_HOST" = "localhost" ]; then
  sed -i 's/DATABASE_HOST=.*/DATABASE_HOST=127.0.0.1/' .env.production
else
  sed -i "s/DATABASE_HOST=.*/DATABASE_HOST=$DATABASE_HOST/" .env.production
fi

sed -i "s/DATABASE_NAME=.*/DATABASE_NAME=$DATABASE_NAME/" .env.production
sed -i "s/DATABASE_USERNAME=.*/DATABASE_USERNAME=$DATABASE_USER/" .env.production
sed -i "s/DATABASE_PASSWORD=.*/DATABASE_PASSWORD=$DATABASE_PASSWORD/" .env.production

if [ "$hostname" = "localhost" ]; then
  sed -i 's/^HOST=.*/HOST=0.0.0.0/' .env.production
else
  sed -i "s/^HOST=.*/HOST=$hostname/" .env.production
fi

sed -i "s/^PORT=.*/PORT=$port/" .env.production

git clone https://github.com/omomcode/backendinitial.git

# Create database user if it doesn't exist and give it all privileges
./db_createuser_giveprivileges.sh "$database_user" "$database_password" "$database_host" "$db_root_user" "$db_root_password"

# Create database if it doesn't exist
./db_create_database.sh "$database_user" "$database_password" "$database_name" "$database_host"

# Import dump to newly created database
./db_import_dump.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$DATABASE_NAME" "$DUMP_NAME" "$DATABASE_HOST"

npm i

npm i @strapi/strapi@v4.15.0

# Run npm run develop synchronously
npm run develop &

# Create strapi user
./strapi_createuser.sh "$STRAPI_USER_FIRSTNAME" "$STRAPI_USER_LASTNAME" "$STRAPI_USER_EMAIL" "$STRAPI_USER_PASSWORD" 


# Login strapi user
token=$(./strapi_loginuser.sh "$STRAPI_USER_EMAIL" "$STRAPI_USER_PASSWORD" "$protocol" "$hostname" "$port" | tr -d '\n')

# # # Continue with the rest of your script
# # ./initiscript.sh