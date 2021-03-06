const appPath = process.cwd();
// Check if preset contains only characters, numbers and -
const presetNameRegEx = /^[a-z0-9-]+$/i;
const prefix = '@confy/';
const presetNamePrefix = `${prefix}preset-`;

module.exports = {
    appPath,
    prefix,
    presetNameRegEx,
    presetNamePrefix,
};
