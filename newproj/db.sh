#!/bin/bash

# MySQL Database Information
DATABASE_USER="root"
DATABASE_PASSWORD="root"
DUMP_NAME="ecommerce-20240402184403"

# Define the path to the SQL dump file
DUMP_PATH="$DUMP_NAME.sql"

# Import data from the dump file into the new database
mysql -u"$DATABASE_USER" -p"$DATABASE_PASSWORD" ecommerce < "$DUMP_PATH"

echo "Database creation and import process complete."