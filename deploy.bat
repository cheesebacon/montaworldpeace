@echo off
echo 🚀 Building the React app...
call npm run build

echo 📦 Sending files to the Droplet...
scp -r dist/. root@104.131.34.194:/var/www/html

echo ✅ Done! Visit https://montaworldpeace.com
pause