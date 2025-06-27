// declare module 'react-image-gallery' {
//   import * as React from 'react';

//   export interface ReactImageGalleryItem {
//     original: string;
//     thumbnail?: string;
//     originalClass?: string;
//     thumbnailClass?: string;
//     description?: string;
//     srcSet?: string;
//     sizes?: string;
//     renderItem?: () => React.ReactNode;
//     renderThumbInner?: () => React.ReactNode;
//     originalAlt?: string;
//     originalTitle?: string;
//     thumbnailAlt?: string;
//     thumbnailTitle?: string;
//   }

//   export interface ReactImageGalleryProps {
//     items: ReactImageGalleryItem[];
//     showNav?: boolean;
//     showFullscreenButton?: boolean;
//     showPlayButton?: boolean;
//     showThumbnails?: boolean;
//     thumbnailPosition?: 'top' | 'bottom' | 'left' | 'right';
//     showBullets?: boolean;
//     showIndex?: boolean;
//     autoPlay?: boolean;
//     slideInterval?: number;
//     onSlide?: (currentIndex: number) => void;
//     onScreenChange?: (fullScreenElement: boolean) => void;
//     onPause?: (currentIndex: number) => void;
//     onPlay?: (currentIndex: number) => void;
//     startIndex?: number;
//     disableSwipe?: boolean;
//     disableThumbnailScroll?: boolean;
//     useBrowserFullscreen?: boolean;
//     isRTL?: boolean;
//     renderLeftNav?: (onClick: () => void, disabled: boolean) => React.ReactNode;
//     renderRightNav?: (onClick: () => void, disabled: boolean) => React.ReactNode;
//     renderPlayPauseButton?: (onClick: () => void, isPlaying: boolean) => React.ReactNode;
//     renderFullscreenButton?: (onClick: () => void, isFullscreen: boolean) => React.ReactNode;
//     renderItem?: (item: ReactImageGalleryItem) => React.ReactNode;
//     renderThumbInner?: (item: ReactImageGalleryItem) => React.ReactNode;
//     onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
//     onThumbnailError?: (event: React.SyntheticEvent<HTMLImageElement>, index: number) => void;
//     additionalClass?: string;
//     useTranslate3D?: boolean;
//     flickThreshold?: number;
//     swipeThreshold?: number;
//     lazyLoad?: boolean;
//     preventDefaultTouchmoveEvent?: boolean;
//     infinite?: boolean;
//     slideDuration?: number;
//   }

//   export default class ReactImageGallery extends React.Component<ReactImageGalleryProps> {}
// }
