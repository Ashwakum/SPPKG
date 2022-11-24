import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import * as pnp from 'sp-pnp-js';
var slideImages = [
    {
        url: "https://wtwngrok.sharepoint.com/sites/DeveloperApp/Shared Documents/Screenshot_20221024_172741.jpg",
        caption: 'Slide 1'
    },
    {
        url: "https://wtwngrok.sharepoint.com/sites/DeveloperApp/Shared Documents/Screenshot_20221027_140637.jpg",
        caption: 'Slide 2'
    },
    {
        url: "https://wtwngrok.sharepoint.com/sites/DeveloperApp/Shared Documents/Screenshot_20221025_183929.jpg",
        caption: 'Slide 3'
    },
    {
        url: "https://wtwngrok.sharepoint.com/sites/DeveloperApp/Shared Documents/Screenshot_20221101_202808.jpg",
        caption: 'Slide 4'
    },
];
export default function CarouselSlider() {
    //console.log(slideImg);
    pnp.sp.web.lists.getByTitle('Documents').items.select('Id,FileRef,Captions').get().then(function (items) {
        items.map(function (item) {
            console.log(item.FileRef);
            debugger;
            slideImages.push({ url: "https://wtwngrok.sharepoint.com/" + item.FileRef, caption: item.Captions });
        });
    });
    console.log(slideImages);
    return (React.createElement("div", { className: "slide-container" },
        React.createElement(Slide, null, slideImages.map(function (slideImage, index) { return (React.createElement("div", { className: "each-slide", key: index },
            React.createElement("img", { src: slideImage.url, alt: "Girl in a jacket", width: "100%", height: "200" }),
            React.createElement("span", null, slideImage.caption))); }))));
}
//# sourceMappingURL=carouselslider.js.map