#!/bin/bash

echo 'root' | sudo -S DEBIAN_FRONTEND=noninteractive apt-get -y install mariadb-server
echo 'root' | sudo -S systemctl start mariadb.service
echo 'root' | sudo -S apt-get -y install jq
echo 'root' | sudo -S apt-get -y install curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
echo 'root' | sudo -S apt-get -y install nodejs
