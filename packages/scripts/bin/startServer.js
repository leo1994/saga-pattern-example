#! /usr/bin/env node
const shell = require('shelljs')

shell.exec('rm -rf dist')
shell.exec('TS_NODE_BASEURL=./dist  node -r tsconfig-paths/register dist/server.js')
