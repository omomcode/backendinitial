#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

profile_response=$(curl -s -H "Authorization: Bearer $token" "$api_url/profile/find")

json_payload="$profile_response"

if yq eval '.data.profile.name' storeconfig.yaml &> /dev/null; then
  profile_name=$(yq eval '.data.profile.name' storeconfig.yaml)
  json_payload=$(jq --arg name "$profile_name" '. + {name: $name}' <<< "$json_payload")
fi

if yq eval '.data.profile.phone' storeconfig.yaml &> /dev/null; then
  profile_phone=$(yq eval '.data.profile.phone' storeconfig.yaml)
  json_payload=$(jq --arg phone "$profile_phone" '. + {phone: $phone}' <<< "$json_payload")
fi

if yq eval '.data.profile.email' storeconfig.yaml &> /dev/null; then
  profile_email=$(yq eval '.data.profile.email' storeconfig.yaml)
  json_payload=$(jq --arg email "$profile_email" '. + {email: $email}' <<< "$json_payload")
fi

if yq eval '.data.profile.region' storeconfig.yaml &> /dev/null; then
  profile_region=$(yq eval '.data.profile.region' storeconfig.yaml)
  json_payload=$(jq --arg region "$profile_region" '. + {region: $region}' <<< "$json_payload")
fi

curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/profile/update/1"