#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

billing_response=$(curl -s -H "Authorization: Bearer $token" "$api_url/billing/find")

json_payload="$billing_response"

if yq eval '.data.billing.name' storeconfig.yaml &> /dev/null; then
  billing_name=$(yq eval '.data.billing.name' storeconfig.yaml)
  json_payload=$(jq --arg name "$billing_name" '. + {name: $name}' <<< "$json_payload")
fi

if yq eval '.data.billing.country' storeconfig.yaml &> /dev/null; then
  billing_country=$(yq eval '.data.billing.country' storeconfig.yaml)
  json_payload=$(jq --arg country "$billing_country" '. + {country: $country}' <<< "$json_payload")
fi

if yq eval '.data.billing.address' storeconfig.yaml &> /dev/null; then
  billing_address=$(yq eval '.data.billing.address' storeconfig.yaml)
  json_payload=$(jq --arg address "$billing_address" '. + {address: $address}' <<< "$json_payload")
fi

if yq eval '.data.billing.apartment' storeconfig.yaml &> /dev/null; then
  billing_apartment=$(yq eval '.data.billing.apartment' storeconfig.yaml)
  json_payload=$(jq --arg apartment "$billing_apartment" '. + {apartment: $apartment}' <<< "$json_payload")
fi

if yq eval '.data.billing.postal' storeconfig.yaml &> /dev/null; then
  billing_postal=$(yq eval '.data.billing.postal' storeconfig.yaml)
  json_payload=$(jq --arg postal "$billing_postal" '. + {postal: $postal}' <<< "$json_payload")
fi

if yq eval '.data.billing.city' storeconfig.yaml &> /dev/null; then
  billing_city=$(yq eval '.data.billing.city' storeconfig.yaml)
  json_payload=$(jq --arg city "$billing_city" '. + {city: $city}' <<< "$json_payload")
fi

curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/billing/update/1"
