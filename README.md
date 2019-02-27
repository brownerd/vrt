# VRT - Vert

VRT is a function that creates a vertical grid over your web page. This is meant to be a tool for web typography nerds that want to work with a baseline grid."

## Install
```
npm i rdmkit-vrt --save-dev
```

You will need to specify a `line-height` and `font-size` on the `:root` selector in order for this to work. This grid is configured to work on a site that is correctly configured for good typography.

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

There is an ABOVE and BELOW display option for solving two issues with vertical grids. Putting the grid below is great, but you can't see it if you have a background color or image set on any elements. Displaying the grid ABOVE the web page is good, but then you can't select any of the elements below the grid. So, you kind of need both to get the job done reliably.  


### The BELOW vertical grid is displayed in magenta
![VRT example](https://github.com/brownerd/vrt/blob/master/below.png?raw=true "VRT example")

### The ABOVE vertical grid is displayed in blue
![VRT example](https://github.com/brownerd/vrt/blob/master/above.png?raw=true "VRT example")

This is intended to be used for development purposes during the "design-to-code" phase.


### Background
Let me start by saying that you don't need the challenge of following a strict vertical grid. Millions of websites are made without following this old preactice from the print world. Besides, designing to a vertical grid in a web page is tough anyway. 

The benefit of following a baseline grid is that it helps you figure out the vertical height and spacing for all the elements in your site. And for a medium that has a vertical nature, a vertical grid maintains a pleasing vertical rhythm as you scroll through the site. 

If we choose to take on the challenge of following a strict vertical rhythm, then we need a grid that we can follow. Instead of making a grid that is independent of our stylesheets, this one only works once you set `line-height` and `font-size` on the `:root` selector in your stylesheet. This forces us to use good typographical practices in our stylesheets. 

Once a `line-height` and `font-size` are set on the `:root` selector, a *baseline height* is created for our web page. In this case above, the baseline height equals 30px. This is determined is determined by multiplying `line-height` by `font-size`. Now, you wont notice much of a change in your web page without the grid tunred on, but you will quickly find that all the padding and margin settings thoughout the site need to be redone. Having a vertical grid to follow will help you figure out the corret spacing.

Now, a common mistake is trying to make ALL text fall on a baseline. You don't need to do this. We are only trying to have the main text content fall on the baseline. So, it the paragraphs and lists of the main column that we are tyring to address. And we want to make sure that the media we add to the web page don't disrupt this baseline alignment. 

I prefer a `line-height` of `1.5` and a `font-size` of an even number for a few reasons. One reason is that I think it looks good. It's fine if you disargee. The other reason why I follow these setting is that the math yields consistent results. When values are used that don't yield even numbers or perfect halves, then different browsers are going to handle rounding fractional numbers differently. This will throw off your baseline efforts and make managing baseline rhythm a pain in the ass. We don't want that.

Another thing to notice is that the basline isn't showing at the bottom of the text. It's showing inbetween lines of text. The web works in a different nature than print does. Everything in HTML creates a bounding box. A paragraph tag is a box that holds text. Every word and character on the page is bound by a text box too. As a result, our text is always going to fit squarely inside that box. So this VRT grid seeks to handle the baseline as it applies to the web and not as it applies to print.  

This will be enough to get you going, but eventually, you will find that images and responsive settings make folling a strict vertical grid impossible. For that problem I've created another module to resize images to the nears multiple of the baseline unit. Thus, enabling us to keep the rhythm that we want. Look at using the [RDM](https://github.com/brownerd/rdm) module to help with that. 


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

## Props:
- [How to get height of entire document with JavaScript?](https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript)
- [How to get CSS values in JavaScript](https://zellwk.com/blog/css-values-in-js/)
- [Create a div using loop](https://stackoverflow.com/questions/11398522/create-a-div-using-loop)
- [for...of vs for...in Loops in JavaScript](https://alligator.io/js/for-of-for-in-loops/)
- [How to get original image size (width & height) in JavaScript](https://www.tutorialrepublic.com/faq/how-to-get-original-image-size-in-javascript.php)
- [Aspect Ratio Boxes](https://css-tricks.com/aspect-ratio-boxes/)
- [CSSPlus](https://csspl.us/#aspecty)
- [Round number up to the nearest multiple of 3](https://stackoverflow.com/questions/3254047/round-number-up-to-the-nearest-multiple-of-3)