const { exec } = require('node:child_process')
const prompt = require("prompt-sync")({ sigint: true });

    exec(prompt(), (err, output) => {
      if (err) {
          console.error("could not execute command: ", err)
          return
      }
      else{
        console.log("Output: \n", output)
      } 
    })
  