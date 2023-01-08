#! /usr/bin/env node
const shell = require('shelljs')

shell.exec('rm -rf dist')
shell.exec('tsc -w')
