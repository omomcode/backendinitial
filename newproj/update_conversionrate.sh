#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

conversion_rate_response=$(curl -s -H "Authorization: Bearer $token" "$api_url/conversionrate/find")

json_payload="$conversion_rate_response"

if yq eval '.data.conversionrate.rate' storeconfig.yaml &> /dev/null; then
  rate=$(yq eval '.data.conversionrate.rate' storeconfig.yaml)
  json_payload=$(jq --arg rate "$rate" '. + {rate: $rate}' <<< "$json_payload")
fi

if yq eval '.data.conversionrate.conversion_currency' storeconfig.yaml &> /dev/null; then
  conversion_currency=$(yq eval '.data.conversionrate.conversion_currency' storeconfig.yaml)
  json_payload=$(jq --arg conversion_currency "$conversion_currency" '. + {conversion_currency: $conversion_currency}' <<< "$json_payload")
fi

curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/conversionrate/update/1"
