#!/bin/bash

STRAPI_USER_EMAIL="$1"
STRAPI_USER_PASSWORD="$2"
protocol="$3"
hostname="$4"
port="$5"

request_body="{\"email\":\"$STRAPI_USER_EMAIL\",\"password\":\"$STRAPI_USER_PASSWORD\"}"
api_url="$protocol://$hostname:$port"

response=$(curl -s -X POST -H "Content-Type: application/json" -d "$request_body" "$api_url/admin/login")

token=$(echo "$response" | grep -o '"token":"[^"]*' | cut -d':' -f2 | tr -d '"')

echo $token