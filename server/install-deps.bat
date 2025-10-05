@echo off
echo Installing server dependencies...
npm install express cors dotenv
npm install --save-dev @types/express @types/node @types/cors typescript ts-node nodemon
echo Server dependencies installed successfully!
pause
