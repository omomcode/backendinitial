#!/bin/bash

# MySQL Database Information
DATABASE_USER="root"
DATABASE_PASSWORD="root"
DUMP_NAME="ecommerce-20240402184403"

# Create a new MySQL database
mysql -u"$DATABASE_USER" -p"$DATABASE_PASSWORD" -e "CREATE DATABASE IF NOT EXISTS ecommerce;"

# Import data from the dump file into the new database
mysql -u"$DATABASE_USER" -p"$DATABASE_PASSWORD" ecommerce < "$DUMP_NAME.sql"

echo "Database creation and import process complete."