#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

shippingzones_response=$(curl -s -H "Authorization: Bearer $token" "$api_url/shippingzone/find")

shippingzones_array=$(yq eval '.data.shippingzone' storeconfig.yaml)

for row in $(echo "${shippingzones_array}" | jq -c '.[]'); do
    id=$(echo $row | jq -r '.id')
    matching_object=$(echo $shippingzones_response | jq --arg id "$id" '.[] | select(.id == ($id | tonumber))')

    if [ -z "$matching_object" ]; then
        # Id doesn't exist, send a POST request
        curl -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$row" "$api_url/shippingzone/create"
    else
        # Id exists, update existing object with values from 'row'
        updated_object=$(jq -n --argjson existing "$matching_object" --argjson new "$row" '$existing * $new')
        curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$updated_object" "$api_url/shippingzone/update/$id"
    fi
done
