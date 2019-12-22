
# Homepager
Build your own homepage in minutes!
<img src="https://imgur.com/evbE5bW.jpg">

## Why?!
Sometimes we don't have time to do something important. For example create your own homepage. <b>Homepager</b> solves this problem

## Creation:
1. Create GitHub repository named <b>```username```.github.io</b> (where ```username``` is your GitHub username)
2. Clone it
3. Clone ```https://github.com/jieggii/homepager.git```
4. Copy all files from <b>```homepager/```</b> into <b>```username.github.io/```</b>
5. Open <b>config.json</b> via any text editor
6. <a href="https://github.com/jieggii/homepager#setting-your-own-homepage">Set parameters as you need</a>
7. Commit & push
8. Done! Locate to <b>https://```username```.github.io</b> and enjoy!

## Setting your own homepage:
### Example config:
```json
{  
  "github-username": "username",  
  "description": "Web developer",  
  "status": "Doing really cool stuff",  
  "social-media": [  
	  {"fa_icon": "fab fa-github", "url": "https://github.com/username", "color": "black"},  
	  {"fa_icon": "fab fa-twitter", "url": "https://twitter.com/username", "color": "#17a2f2"},  
	  {"fa_icon": "far fa-envelope", "url": "mailto:email@example.com", "color": ""},  
	  {"fa_icon": "fab fa-instagram", "url": "https://instagram.com/username", "color": ""}  
  ]
}
```
* ```username``` - Your GitHub username. If you change it on GitHub, you also should change it in ```config.json```
* ```description``` - Self-introducing. Tell who you are. For example "Web designer", "Rly cool man" or something like this
* ```status``` - Your status. For example "Learning", "Working", "Having fun" etc.
* ```social-media``` - List consisting of links to your social networks accounts
* * ```fa_icon``` - Icon classes from <a href="https://fontawesome.com/">Font Awesome</a>. For example "<b>fab fa-github"</b> for GitHub icon. Just search them <a href="https://fontawesome.com/icons?d=gallery">here</a>, then copy & paste classes into ```fa_icon``` value
* * ```url``` - Link to your social network account. <b>Must contain protocol (https, http, mailto, etc.)</b>
* * ```color``` - Optional variable. Color of icon.

## License:
* <b>MIT</b>

## Used technologies:
* CSS
* * Bootstrap
* * Font Awesome
* JS
* * JQuery
* * Vue.js
