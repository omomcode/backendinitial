# MySQL Database Information
$DATABASE_USER = "root"
$DATABASE_PASSWORD = "root"
$DUMP_NAME = "ecommerce-20240402184403"

# Define the path to the SQL dump file
$DUMP_PATH = "$DUMP_NAME.sql"

# Construct the MySQL command
$mysql_command = "mysql -u$DATABASE_USER -p$DATABASE_PASSWORD ecommerce < $DUMP_PATH"

# Execute the MySQL command
Invoke-Expression $mysql_command

Write-Host "Database creation and import process complete."