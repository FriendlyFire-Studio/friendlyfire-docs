@echo off
title FriendlyFire Docs Dev Server

echo Starting FriendlyFire Docs...

call npm install

start http://localhost:3000

call npm run start

pause