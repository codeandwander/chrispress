# Chrispress

### Installation

Clone the repo into your Wordpress themes directory and activate it via the admin dashboard.
```
cd wordpress/wp-content/themes
git clone https://github.com/codeandwander/chrispress.git
```

Install dependencies

```
npm install
```

You may need to install Webpack globally `npm install webpack -g`

#### Development

Webpack bundles all JavaScript files saved in the `/js/_chrispress` directory. Use `import` in `index.js` to include new JS files. i.e `import './_chrispress/modal.js'`.

Bundled JS file is `index.min.js`

Webpack also bundles Sass (SCSS) into CSS from the same `index.js` file.
```
npm run dev
```



#### Production

This command minifies and mangles JS and CSS for the moment.
```
npm run prod
```

![](https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif)

P.S Generated a skeleton theme from [Underscores](https://underscores.me/) , so there's still a lot of 💩 laying around...
