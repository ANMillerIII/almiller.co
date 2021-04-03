# <a href="https://almiller.co/" target="__blank">(almiller.co)</a>

##  About

<p>
<a href="https://almiller.co/" target="__blank">(almiller.co)</a> is a collection of personal, technical and abstract articles.
</p>

##  Technical

###    Docsify.js

This uses <a href="https://docsify.js.org/" target="__blank">docsify.js</a>, an open-source markdown documentation generator. The following docsify plugins are also used:

- <a href="https://jhildenbiddle.github.io/docsify-themeable/#/" target="__blank">docsify-themeable</a>
- <a href="https://github.com/erickjx/docsify-footer-enh" target="__blank">docsify-footer</a>
- docsify-search

###    Hosting on AWS

<p>
docsify does not create static HTML files but rather dynamically interprets markdown. To serve the dynamic content AWS EC2 instances (through Amplify) are used.
</p>
<p>
The following rewrites/redirects are used for the hosted domain <a href="https://almiller.co/" target="__blank">almiller.co</a>:
</p>

| Source   | Target      | Type          |
| -------- | ----------- | ------------- |
| /<*>.md  | /<*>.md     | 200 (Rewrite) |
| /<*>.jpg | /<*>.jpg    | 200 (Rewrite) |
| /<*>.pdf | /<*>.pdf    | 200 (Rewrite) |
| /<*>.js | /<*>.js    | 200 (Rewrite) |
| /<*>.css | /<*>.css    | 200 (Rewrite) |
| /<*>.svg | /<*>.svg    | 200 (Rewrite) |
| /<*>     | /index.html | 200 (Rewrite) |
| https://www.almiller.co    | https://almiller.co | 301 (Redirect) |

##  Usage

Feel free to use this template for your own blog, no crediting required.

##  License

MIT License (c) 2021 Al Miller
