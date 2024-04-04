#!/bin/bash

DATABASE_USER="$1"
DATABASE_PASSWORD="$2"
DATABASE_NAME="$3"
DUMP_NAME="$4"
DATABASE_HOST="$5"

DUMP_PATH="$DUMP_NAME.sql"

# Import data from the dump file into the new database
mysql -u"$DATABASE_USER" -p"$DATABASE_PASSWORD" -h"$DATABASE_HOST" $DATABASE_NAME < "$DUMP_PATH"

echo "Dump imported"