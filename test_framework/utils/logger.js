function info(text) {
    console.log(`${new Date().toISOString()} - ${text}`);
}

function warning(text) {
    console.warn(`${new Date().toISOString()} - ${text}`);
}

function error(text) {
    console.error(`${new Date().toISOString()} - ${text}`);
}

module.exports = { info, warning, error };
