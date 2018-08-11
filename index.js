
if (typeof process === 'undefined') {
    throw new Error("node-system is meant to be used server-side")
}

const { spawn } = require('child_process')

const childRet = childProc => {
    return new Promise(
	resolve => {
	    childProc.on('close', (code) => {
		console.log('')
		resolve(code)
	    })
	},
	fail => fail(code))
}

const getChildRet = async function(childProc) {
    let retVal = await childRet(childProc)
    //console.log(`Resultado: ${retVal}`)
    return retVal
} 

process.system = (cmd) => {
  if (typeof cmd === 'undefined' || !(typeof cmd === 'string') ||  !cmd.length) {
    console.error("Must provide a command string to run.")
    return -1
  }
  let [exec, ...args] = cmd.split(/[ ,\t]+/g) 
  let child
  try {
    child = spawn(exec, args, {cwd: process.cwd(), env: process.env})
    if (typeof child.stdout === 'undefined') {
      console.error("Unknown process requested")
      return child.exitCode || -2
    }
    console.log('')
    child.stderr.on('data', data => console.error(data.toString()))
    child.stdout.on('data', data => console.log(data.toString()))
    let ret = getChildRet(child)
    return 0
  }
  catch(e) {
    console.error('')
    return child.exitCode || -3
  }
}


