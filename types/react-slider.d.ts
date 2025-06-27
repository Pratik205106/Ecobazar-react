declare module 'react-slider' {
    import * as React from 'react';
  
    interface ReactSliderProps {
      className?: string;
      thumbClassName?: string;
      trackClassName?: string;
      min?: number;
      max?: number;
      step?: number;
      value?: number | [number, number];
      defaultValue?: number | [number, number];
      onChange?: (value: number | [number, number]) => void;
      withTracks?: boolean;
      pearling?: boolean;
      minDistance?: number;
      ariaLabel?: string | string[];
      orientation?: 'horizontal' | 'vertical';
    }
  
    const ReactSlider: React.FC<ReactSliderProps>;
  
    export default ReactSlider;
  }
  