@echo off
echo Installing dependencies for SMK Negeri Website...

echo.
echo Installing server dependencies...
cd server
call install-deps.bat
cd ..

echo.
echo Installing client dependencies...
cd client
call install-deps.bat
cd ..

echo.
echo All dependencies installed successfully!
pause
