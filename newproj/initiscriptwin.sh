# Create admin user
npx strapi admin:create-user --firstname Tihi --lastname Z --email tihi@gmail.com --password Smederevo1

# Define the request body
$request_body = @{
    email = "tihi@gmail.com"
    password = "Smederevo1"
} | ConvertTo-Json

# Send the cURL request and extract the response
$response = Invoke-RestMethod -Method POST -Uri "http://localhost:1337/admin/login" -Body $request_body -ContentType "application/json"

# Parse the JSON response to extract the token and user data
$token = $response.token
$user_id = $response.id
$user_firstname = $response.firstname
$user_lastname = $response.lastname
$user_email = $response.email

# Print the extracted token and user data
Write-Host "Token: $token"
Write-Host "User ID: $user_id"
Write-Host "User Firstname: $user_firstname"
Write-Host "User Lastname: $user_lastname"
Write-Host "User Email: $user_email"

# Read store_name from storeconfig.yaml
$store_config = Get-Content '../../storeconfig.yaml' | ConvertFrom-Json
$store_name = $store_config.data.store_name
Write-Host $store_name

# Change StoreName
$profile_response = Invoke-RestMethod -Method GET -Uri "http://localhost:1337/omcommerce/profile/find" -Headers @{ Authorization = "Bearer $token" }
$profile_response.name = $store_name

$modified_response = $profile_response | ConvertTo-Json

Invoke-RestMethod -Method PUT -Uri "http://localhost:1337/omcommerce/profile/update/1" -Headers @{ Authorization = "Bearer $token"; ContentType = "application/json" } -Body $modified_response