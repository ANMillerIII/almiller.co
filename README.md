# <a href="https://almiller.co/" target="__blank">almiller.co</a>


- add toggle sidebar indicator icon
- add code file title
- add code highlighting?
##  About

<p>
<a href="https://almiller.co/" target="__blank">almiller.co</a> is a collection of personal, technical and abstract articles.
</p>

##  Technical

Run on `localhost:3000`:

`docsify run serve`

###    Docsify.js

This site uses <a href="https://docsify.js.org/" target="__blank">docsify.js</a>, an open-source markdown documentation generator. The following docsify plugins are also used:

- <a href="https://jhildenbiddle.github.io/docsify-themeable/#/" target="__blank">docsify-themeable</a>
<!-- - <a href="https://github.com/erickjx/docsify-footer-enh" target="__blank">docsify-footer</a> -->
<!-- - docsify-search -->

###    Hosting on AWS

<p>
Docsify dynamically generates HTML from Markdown using Prism.To serve the dynamic content, AWS EC2 instances (through Amplify) are used.
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

<<<<<<< HEAD
Feel free to use this template for your own docsify site, no crediting required.

Eventual will write this theme into an official docsify theme.
=======
1. Uploads to S3 and invalidate CloudFront distribution (i.e., deploys to https://almiller.co).
2. Create AWS CloudFront cache invalidation or use S3 versioning from AWS Console to deploy.
>>>>>>> a6b3d6ae4d56c0d703848b21fc7772bf5ba80cc5

##  License

MIT License (c) 2021 Al Miller
