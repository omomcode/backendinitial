#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

subcategories_response=$(curl -s -H "Authorization: Bearer $token" "$api_url/subcategory/find")

subcategory_object=$(yq eval '.data.subcategory' storeconfig.yaml)

id=$(echo $subcategory_object | yq eval '.id')

matching_object=$(echo $subcategories_response | jq --arg id "$id" '.[] | select(.id == ($id | tonumber))')

if [ -z "$matching_object" ]; then
    # Id doesn't exist, send a POST request
    curl -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$subcategory_object" "$api_url/subcategory/create"
else
    # Id exists, update existing object with values from 'subcategory_object'
    updated_object=$(jq -n --argjson existing "$matching_object" --argjson new "$subcategory_object" '$existing * $new')
    curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$updated_object" "$api_url/subcategory/update/$id"
fi
