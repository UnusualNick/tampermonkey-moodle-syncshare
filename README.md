# Tampermonkey syncshare triggerer
# What is this?
This is a Tampermonkey script that helps with tests on moodle.
# Requirements
- Tampermonkey extension
- Somewhat changed `syncshare` extension in your browser. (Orignal extension can be found [here](https://syncshare.naloaty.me/))
# How to use?
1. Add script in your Tampermonkey extension
2. Open your test on moodle
3. That's it! Now you can click on the button that appears on the top right left of the page. 
# How do i make that `syncshare` extension?
## Important:
(Recently i've realised, that `shadowRoot` api in chrome ain't that stable, so better experience is achieved in firefox or some other browsers, not based on chromium)
1. Download original extension for your platform from [here](https://syncshare.naloaty.me/)
2. Extract the extension
3. Find and replace the following code in `quizattempt.js` file
```javascript
.attachShadow({mode: "closed"})
```
with
```javascript
.attachShadow({mode: "open"})
```
4. Save the file
5. Load the extension in your browser
6. Done!

## Credits
- [syncshare](https://syncshare.naloaty.me/) for the original extension
- [Tampermonkey](https://www.tampermonkey.net/) for the extension
- [Moodle](https://moodle.org/) for the platform

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Plans
- [ ] Change extension to fire at syncshare load itself
- [ ] Add persistent user configuration (time to wait, etc)
- [ ] Add even more features
