Node v18 or v20 must be installed
MySQL server v8 or higher
jq latest version -> install with chocolatey with command: choco install jq
yq latest version -> install with chocolatey with command: choco install yq

You need to install choco first:

In PowerShell as admin:

run command: Get-ExecutionPolicy. If it returns Restricted, then run the command: Set-ExecutionPolicy AllSigned

Then run command: Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

Then run: choco install jq
Then run: choco install yq


Linux

Install jq with: sudo apt-get install jq
Install yq with: sudo apt-get install yq
