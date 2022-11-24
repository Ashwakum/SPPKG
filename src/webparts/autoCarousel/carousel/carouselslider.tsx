import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import * as pnp from 'sp-pnp-js';

let slideImages = [
    {
        url: `https://wtwngrok.sharepoint.com/sites/DeveloperApp/Shared Documents/Screenshot_20221024_172741.jpg`,
        caption: 'Slide 1'
    },
    {
        url: `https://wtwngrok.sharepoint.com/sites/DeveloperApp/Shared Documents/Screenshot_20221027_140637.jpg`,
        caption: 'Slide 2'
    },
    {
        url: `https://wtwngrok.sharepoint.com/sites/DeveloperApp/Shared Documents/Screenshot_20221025_183929.jpg`,
        caption: 'Slide 3'
    },
    {
        url: `https://wtwngrok.sharepoint.com/sites/DeveloperApp/Shared Documents/Screenshot_20221101_202808.jpg`,
        caption: 'Slide 4'
    },
    
];
type Person = {
    url: string;
    caption: string;
  };
export default function CarouselSlider() {
    pnp.sp.web.lists.getByTitle('Documents').items.select('Id,FileRef,Captions').get().then((items: any) => {
        items.map((item) => {
            console.log(item.FileRef);
            debugger;
            slideImages.push({url:`https://wtwngrok.sharepoint.com/${item.FileRef}`,caption:item.Captions});
        })
    })
    console.log(slideImages);
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <img src={slideImage.url} alt="Girl in a jacket" width="100%" height="200" />
                        <span>{slideImage.caption}</span>
                                                
                    </div>
                ))}
            </Slide>
        </div>
    );
}
