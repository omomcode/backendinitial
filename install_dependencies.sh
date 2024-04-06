#!/bin/bash

commands=($(yq r packages.yaml 'packages[*]'))

for cmd in "${commands[@]}"
do
    eval "$cmd"
done