import Image from 'next/image';
import { useState } from 'react';

//import { Button } from 'src/atoms/Button';

import { CarouselS, image, imagesS } from './style.module.css';

const images = [
  {
    id: '1',
    src: 'https://stored-cf.slickpic.com/MjYwMDgzY2FhYTc1MmE,/20200626/MTcwMDk3OTlhNzIy/pn/1900/Mt_Tombstone_1363_2_1920px.webp',
    alt: '',
  },
  {
    id: '2',
    src: 'https://stored-cf.slickpic.com/MjYwMDgzY2FhYTc1MmE,/20200626/MTcwMDk3NjhhNWEy/pn/1900/Mesa_Arch_4309_1920px.webp',
    alt: '',
  },
  {
    id: '3',
    src: 'https://stored-cf.slickpic.com/MjYwMDgzY2FhYTc1MmE,/20200626/MTcwMDk4NTVhYTc3/pn/1900/Vancouver_from_Stanley_Park_8385_16x9.webp',
    alt: '',
  },
  {
    id: '4',
    src: 'https://stored-cf.slickpic.com/MjYwMDgzY2FhYTc1MmE,/20200626/MTcwMDk4MzU1YTdh/pn/1900/St_Magdelena_2684_original_aspect_ratio_1920px.webp',
    alt: '',
  },
];
export const Carousel = () => {
  const [Index, setIndex] = useState(0);

  const imagesList = (
    <>
      <div className={image}>
        <Image
          alt={images[Index]?.alt}
          src={images[Index]?.src}
          width={1900}
          height={1000}
        />
      </div>

      {/*<div className={image}>
        <Image
          alt={images[Index + 1]?.alt}
          src={images[Index + 1]?.src}
          width={1900}
          height={1000}
        />
      </div>*/}
    </>
  );

  const handleNext = () => {
    setIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    setIndex(prev => prev - 1);
  };

  return (
    <div className={CarouselS}>
      <button
        disabled={Index >= images.length - 1}
        onClick={handleNext}
      >
        &lt;
      </button>

      <div className={imagesS}>{imagesList}</div>

      <button
        disabled={Index <= 0}
        onClick={handlePrev}
      >
        &gt;
      </button>
    </div>
  );
};
