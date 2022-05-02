#!/usr/bin/env bash

SECRET=$(openssl rand -base64 32)

# If NODE_ENV=production and NEXTAUTH_SECRET has NOT been set yet, export it
if [[ "${NODE_ENV}" = "production" ]] && [[ -n "${NEXTAUTH_SECRET}" ]]; then
  export NEXTAUTH_SECRET="$SECRET"
fi
