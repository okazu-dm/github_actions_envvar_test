import * as core from '@actions/core';
Object.keys(process.env).forEach(key => {
    if (key.startsWith('ACTIONS_')) {
    console.log(`${key}: ${process.env[key]}`)
    }
})
