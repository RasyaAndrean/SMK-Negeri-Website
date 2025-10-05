@echo off
echo Starting SMK Negeri Website in development mode...

start "Server" /D "server" dev.bat
start "Client" /D "client" dev.bat

echo.
echo Both client and server are running in development mode.
echo Client: http://localhost:3000
echo Server: http://localhost:3001
echo.
echo Press any key to stop...
pause >nul
