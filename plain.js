Object.keys(process.env).forEach(key => {
    if (key.startsWith('ACTIONS_')) {
        core.info(`${key}=${process.env[key]}`);
    }
})
