function info(text) {
    console.log(generateLogString(text));
}

function warning(text) {
    console.warn(generateLogString(text));
}

function error(text) {
    console.error(generateLogString(text));
}

function generateLogString(text) {
    return `${new Date().toISOString()} - ${text}`
} 

export default { info, warning, error };
