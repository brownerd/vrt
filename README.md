# VRT - Vert

VRT is a function that creates a vertical grid over your web page. This is meant to be a tool for web typography nerds that want to work with a baseline grid."

## Install
```
npm i rdmkit-vrt --save-dev
```

You will need to specify a `line-height` and `font-size` on the root element in order for this to work.

```css
:root {
    line-height: 1.5;
    font-size: 20px;
  }
```

## Usage

- Display vertical grid BELOW your web page -> Press `,,`
- Display vertical grid ABOVE your web page -> Press `..` 
- Close vertical grid press -> `x`

There is an ABOVE and BELOW display option for solving two issues with vertical grids. Using BELOW is great because you can still click on the element within your web page. However, if you are using a background color or image on the body, then that would cover some if not all of the grid. Thus, you will need to display the grid ABOVE the web page. However, this will prevent you from being able to click on anything within the webpage. 


### The BELOW vertical grid is displayed in magenta
![VRT example](https://github.com/brownerd/vrt/blob/master/below.png?raw=true "VRT example")

### The ABOVE vertical grid is displayed in blue
![VRT example](https://github.com/brownerd/vrt/blob/master/above.png?raw=true "VRT example")

This is intended to be used for development purposes during the "design-to-code" phase.


### Background
We are all free to define our CSS however we want, but I'd argue that setting `line-height` and `font-size` on the root is a best practice for web typography. The `rem` unit in css refers to root `em`s. Thus, in this example above, `1rem` is equal to `20px`. The `rem` unit looks to see what `font-size` is set on the `:root` selector, better know as the `html` selector. In other words, we are setting base typographical styles at the highest level of the document.

Once a `line-height` and `font-size` are set on the `:root` selector, a *baseline height* is determined by multiplying `line-height` by `font-size`. In this case above, the baseline height equals 30px.

I prefer a `line-height` of `1.5` and a `font-size` of an even number for a few reasons. One reason is that I think it looks good. It's fine if you disargee. The other reason why I follow these setting is that the math yields consistent results. When values are used that don't yield even numbers or perfect halves, then different browsers are going to handle rounding fractional numbers differently. This will throw off your baseline efforts and make managing baseline rhythm a pain in the ass. We don't want that.

## Props:
- [How to get height of entire document with JavaScript?](https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript)
- [How to get CSS values in JavaScript](https://zellwk.com/blog/css-values-in-js/)
- [Create a div using loop](https://stackoverflow.com/questions/11398522/create-a-div-using-loop)
- [for...of vs for...in Loops in JavaScript](https://alligator.io/js/for-of-for-in-loops/)
- [How to get original image size (width & height) in JavaScript](https://www.tutorialrepublic.com/faq/how-to-get-original-image-size-in-javascript.php)
- [Aspect Ratio Boxes](https://css-tricks.com/aspect-ratio-boxes/)
- [CSSPlus](https://csspl.us/#aspecty)
- [Round number up to the nearest multiple of 3](https://stackoverflow.com/questions/3254047/round-number-up-to-the-nearest-multiple-of-3)

## Articles on Vertical Rhythm
- [Compose to a Vertical Rhythm](https://24ways.org/2006/compose-to-a-vertical-rhythm)
- [The Elements of Typographic Style Applied to the Web](http://webtypography.net/intro/)
- [SNAP TO BASE-LINE](https://codepen.io/brownerd/pen/9ef805a6240083fb267d3faf3d08f440)
- [BASELINE](https://shalanah.github.io/baseline/)
- [Responsive Vertical Rhythm with CSS Custom Properties and CSS Calc](https://zellwk.com/blog/responsive-vertical-rhythm/)
- [8-Point Grid: Vertical Rhythm](https://builttoadapt.io/8-point-grid-vertical-rhythm-90d05ad95032)
- [RHYTHM IN WEB TYPOGRAPHY](https://betterwebtype.com/rhythm-in-web-typography)
- [4 Simple Steps to Vertical Rhythm](http://typecast.com/blog/4-simple-steps-to-vertical-rhythm)
- [Setting Type on the Web to a Baseline Grid](https://alistapart.com/article/settingtypeontheweb)
- [Seeing Typographic Details](https://prowebtype.com/seeing-typographic-details/)
- [A Visual Type Scale](https://type-scale.com/)