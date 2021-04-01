# <i>deconstruction</i>

##  About

<p>
<i>deconstruction</i> is a personal collection of technical and abstract articles.
</p>
 The title is in reference to the work of French philosopher <a href="https://en.wikipedia.org/wiki/Jacques_Derrida" target="__blank">Jacques Derrida</a>, whose concept of deconstruction, in its most distilled form, provides a basis for questioning both our beliefs about the world and the integrity of the process through which we derive them.

##  Technical

###    Docsify.js

<i>deconstruction</i> uses <a href="https://docsify.js.org/" target="__blank">docsify.js</a>, an open-source markdown documentation generator. The following docsify plugins are also used:

- <a href="https://jhildenbiddle.github.io/docsify-themeable/#/" target="__blank">docsify-themeable</a>
- <a href="https://github.com/erickjx/docsify-footer-enh" target="__blank">docsify-footer</a>
- docsify-search

###    Hosting on AWS

<p>
docsify does not create static HTML files but rather dynamically interprets markdown. To serve the dynamic content AWS EC2 instances (through Amplify) are used.
</p>
<p>
The following rewrites/redirects are used for the hosted domain <a href="https://deconstruction.co/" target="__blank">deconstruction.co</a>:
</p>

| Source      | Target | Type |
| ----------- | ----------- | ----------- |
| /<*>.md	      | /<*>.md	       | 200 (Rewrite)	       |
| /<*>.jpg	      | /<*>.jpg	       | 200 (Rewrite)	       |
| /<*>	   | /index.html	        | 200 (Rewrite)	       |

##  Usage

Feel free to use this template for your own blog, no crediting required.

##  License

MIT License (c) 2021 Al Miller