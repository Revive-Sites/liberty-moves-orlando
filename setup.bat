@echo off
echo.
echo  Revive Agency -- Site Setup
echo ================================

:: Check Node
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
  echo ERROR: Node.js not found. Install from https://nodejs.org then re-run.
  pause
  exit /b 1
)

echo.
echo [1/3] Installing project dependencies...
call npm install

echo.
echo [2/3] Installing UI UX Pro Max skill globally...
call npm install -g uipro-cli

echo.
echo [3/3] Initializing skill in this project...
call uipro init --ai claude --offline

echo.
echo  Done! Ready to build.
echo.
echo Next steps:
echo   1. Fill in SITE_CONFIG.md with client details
echo   2. Run: npm run dev
echo   3. Open Claude Code: claude
echo.
pause
