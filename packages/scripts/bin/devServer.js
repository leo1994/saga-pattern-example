#! /usr/bin/env node
const shell = require('shelljs')

shell.exec('rm -rf dist')
shell.exec('nodemon --watch "src/**" --ext "ts,json" --ignore "src/**/*.tests.ts" --exec "ts-node -r dotenv/config -r tsconfig-paths/register src/server.ts"')
