# process-system
Adds a system function to process. Provides a simple way to execute shell commands from within a node-repl.

## Install

`npm install process-system`

or, to make it available system-wide:

`sudo npm install -g process-system`

## Usage

```javascript
//Throw it in.
require('process-system')

//Use it with some shell command
process.system('ls -l')

```

