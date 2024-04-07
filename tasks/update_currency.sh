#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

currency_response=$(curl -s -H "Authorization: Bearer $token" "$api_url/currency/find")

json_payload="$currency_response"

if yq eval '.data.currency.currency' storeconfig.yaml &> /dev/null; then
  currency=$(yq eval '.data.currency.currency' storeconfig.yaml)
  json_payload=$(jq --arg currency "$currency" '. + {currency: $currency}' <<< "$json_payload")
fi

curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/currency/update/1"
