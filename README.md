# Deno Server

This is simple deno web server demo project. Purpose of this repository is to explore features of deno framework.

## Setup for VS Code
* Create `lib\lib.deno_runtime.d.ts` file.
* Run `deno types > lib/lib.deno_runtime.d.ts` command to generate deno types
* If you do not get intellisense in VS Code for deno packages, then try to put relative path `/Users/<username>/Library/Caches/deno/deps/http/*` instead of `"$HOME/Library/Caches/deno/deps/http/*"`.

## Running server
* Run `deno main.ts` in terminal
* Go to URL `http://localhost:8000/` and observe the response.