const { prettier } = require('@siberiacancode/prettier');

/** @type {import('prettier').Config} */
module.exports = {
    ...prettier,
    tabWidth: 2 // хотелось бы сделать отступ побольше, но eslint жалуется
};