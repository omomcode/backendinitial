#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

categories_response=$(curl -s -H "Authorization: Bearer $token" "$api_url/categories/find")

category_object=$(yq eval '.data.category' storeconfig.yaml)

id=$(echo $category_object | yq eval '.id')

matching_object=$(echo $categories_response | jq --arg id "$id" '.[] | select(.id == ($id | tonumber))')

if [ -z "$matching_object" ]; then
    # Id doesn't exist, send a POST request
    curl -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$category_object" "$api_url/categories/create"
else
    # Id exists, update existing object with values from 'category_object'
    updated_object=$(jq -n --argjson existing "$matching_object" --argjson new "$category_object" '$existing * $new')
    curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$updated_object" "$api_url/categories/update/$id"
fi
