

_s-webpack-hmr-template
===

This project is based on (_s) undercores from Automattic: https://github.com/Automattic/_s.

Installation
---------------

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Composer](https://getcomposer.org/)

### Quick Start

Clone or download this repository, change its name to something else (like, say, `megatherium-is-awesome`), and then you'll need to do a six-step find and replace on the name in all the templates.

1. Run `composer install`.
2. Run `npm install`.
3. Search for `'replace-text-domain'` (inside single quotations) to capture the text domain and replace with: `'megatherium-is-awesome'`.
2. Search for `replace_function_slug_` to capture all the functions names and replace with: `megatherium_is_awesome_`.
3. Search for `Text Domain: replace-text-domain` and replace with: `Text Domain: megatherium-is-awesome`.
3. Search for `Theme Name: replace-theme-name` and replace with: `Theme Name: Your Theme Name`.
4. Search for <code>&nbsp;replace-DocBlocks</code> (with a space before it) to capture DocBlocks and replace with: <code>&nbsp;Megatherium_is_Awesome</code>.
5. Search for `replace-prefix-handles-` to capture prefixed handles and replace with: `megatherium-is-awesome-`.
6. Search for `REPLACE_CONSTANTS_` (in uppercase) to capture constants and replace with: `MEGATHERIUM_IS_AWESOME_`.

Then, update the stylesheet header in `style.css`, the links in `footer.php` with your own information and rename `_s.pot` from `languages` folder to use the theme's slug. Next, update or delete this readme.


### CLI commands
