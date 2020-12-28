

_s-webpack-hmr-template
===
(_s) undercores but with webpack and hot-module-reloading.

This project is based on (_s) undercores from Automattic: https://github.com/Automattic/_s.

Installation
---------------

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Quick Start

Clone or download this repository.

1. Run `composer install`.
2. Run `npm install`.
3. Search for `'replace-text-domain'` (inside single quotations) to capture the text domain and replace with: `'your-text-domain'`.
2. Search for `replace_function_slug_` to capture all the functions names and replace with: `your_function_slug_`.
3. Search for `Text Domain: replace-text-domain` and replace with: `Text Domain: your-text-domain`.
3. Search for `Theme Name: replace-theme-name` and replace with: `Theme Name: Your Theme Name`.
4. Search for <code>&nbsp;replace-DocBlocks</code> (with a space before it) to capture DocBlocks and replace with: <code>&nbsp;Your_Theme_Name</code>.
5. Search for `replace-prefix-handles-` to capture prefixed handles and replace with: `your-prefix-handle-`.
6. Search for `REPLACE_CONSTANTS_` (in uppercase) to capture constants and replace with: `YOUR_CONSTANT_`.



### CLI commands
