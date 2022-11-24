import * as React from 'react';
import styles from './AutoCarousel.module.scss';
import { IAutoCarouselProps } from './IAutoCarouselProps';
import { escape } from '@microsoft/sp-lodash-subset';
import CarouselSlider from '../carousel/carouselslider';

export default class AutoCarousel extends React.Component<IAutoCarouselProps, {}> {
  public render(): React.ReactElement<IAutoCarouselProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    
    return (
      <div style={{"width": "100%"}}>
        <CarouselSlider/>
      </div>
    );
  }
}
