#!/bin/bash

npx strapi admin:create-user --firstname=Tihi --lastname=Z --email=tihi@gmail.com --password=Smederevo1

# Define the request body
request_body='{"email":"tihi@gmail.com","password":"Smederevo1"}'

# Send the cURL request and extract the response
response=$(curl -s -X POST -H "Content-Type: application/json" -d "$request_body" http://localhost:1337/admin/login)

# Parse the JSON response to extract the token and user data
token=$(echo "$response" | grep -o '"token":"[^"]*' | cut -d':' -f2 | tr -d '"')
user_id=$(echo "$response" | grep -o '"id":[0-9]*' | awk -F':' '{print $2}')
user_firstname=$(echo "$response" | grep -o '"firstname":"[^"]*' | cut -d':' -f2 | tr -d '"')
user_lastname=$(echo "$response" | grep -o '"lastname":"[^"]*' | cut -d':' -f2 | tr -d '"')
user_email=$(echo "$response" | grep -o '"email":"[^"]*' | cut -d':' -f2 | tr -d '"')

# Print the extracted token and user data
echo "Token: $token"
echo "User ID: $user_id"
echo "User Firstname: $user_firstname"
echo "User Lastname: $user_lastname"
echo "User Email: $user_email"

store_name=$(yq ".data.profile.store_name" storeconfig.yaml)

profile_response=$(curl -s -H "Authorization: Bearer $token" http://localhost:1337/omcommerce/profile/find)

modified_response=$(echo "$profile_response" | jq --arg store_name "$store_name" '.name = $store_name')

curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$modified_response" http://localhost:1337/omcommerce/profile/update/1
