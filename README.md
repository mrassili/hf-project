# IDEADATE Website Project (for Hidden Founders)

This project is about developing a responsive web page that replicates the design mockup provided by Hidden Founders for their front-end developer position challenge

(This project is unmaintained for the time being)

## Setup

If you already have NodeJS installed, you can just clone the project
```
git clone https://github.com/mrassili/hf-project.git
```
Change directory to the root of the project
```
cd hf-project
```
Install the dev dependencies in the root of the project
```
npm install
```
And run.
```
npm start
```

## Folder Structure

- `css/`: compiled and minified CSS.
- `sass/`: The Sass.
  - `base/`: Typography and reset
  - `components/`: Components such as buttons...
  - `helpers/`: Helper functions and variables
  - `layout/`: Grid, header and footer
  - `pages/`: Page-specific styles
  - `main.scss`: Main Sass file
- `fonts/`: All needed fonts.
- `imgs/`: All needed images.
- `node_modules/`: Gulp plugins and other devDependencies.
- `.gitignore`: Files to ignore.
- `gulpfile.js`: Defines Gulp tasks.
- `index.html`: Project entry point.
- `home.html`: Second HTML webpage.
- `package.json`: Required npm file.
- `package-lock.json`: Generated npm file.
