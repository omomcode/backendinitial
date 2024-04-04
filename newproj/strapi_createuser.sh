#!/bin/bash

STRAPI_USER_FIRSTNAME="$1"
STRAPI_USER_LASTNAME="$2"
STRAPI_USER_EMAIL="$3"
STRAPI_USER_PASSWORD="$4"

npx strapi admin:create-user --firstname="$STRAPI_USER_FIRSTNAME" --lastname="$STRAPI_USER_LASTNAME" --email="$STRAPI_USER_EMAIL" --password="$STRAPI_USER_PASSWORD"

echo "Strapi user created"