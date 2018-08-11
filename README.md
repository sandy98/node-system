# node-system
Adds a system function to process. Provides a simple way to execute shell commands from within a node-repl

## Install

`npm install node-system`

or, to make it available system-wide:

`sudo npm install -g node-system`

## Usage

```javascript
//Throw it in.
require('node-system')

//Use it with some shell command
process.system('ls -l')

```

