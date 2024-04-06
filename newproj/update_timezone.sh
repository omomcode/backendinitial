#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

timezone_response=$(curl -s -H "Authorization: Bearer $token" "$api_url/timezone/find")

json_payload="$timezone_response"

if yq eval '.data.timezone.timezone' storeconfig.yaml &> /dev/null; then
  timezone=$(yq eval '.data.timezone.timezone' storeconfig.yaml)
  json_payload=$(jq --arg timezone "$timezone" '. + {timezone: $timezone}' <<< "$json_payload")
fi

if yq eval '.data.timezone.measurement' storeconfig.yaml &> /dev/null; then
  measurement=$(yq eval '.data.timezone.measurement' storeconfig.yaml)
  json_payload=$(jq --arg measurement "$measurement" '. + {measurement: $measurement}' <<< "$json_payload")
fi

if yq eval '.data.timezone.unit' storeconfig.yaml &> /dev/null; then
  unit=$(yq eval '.data.timezone.unit' storeconfig.yaml)
  json_payload=$(jq --arg unit "$unit" '. + {unit: $unit}' <<< "$json_payload")
fi

if yq eval '.data.timezone.lengthUnit' storeconfig.yaml &> /dev/null; then
  lengthUnit=$(yq eval '.data.timezone.lengthUnit' storeconfig.yaml)
  json_payload=$(jq --arg lengthUnit "$lengthUnit" '. + {lengthUnit: $lengthUnit}' <<< "$json_payload")
fi

curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/timezone/update/1"
