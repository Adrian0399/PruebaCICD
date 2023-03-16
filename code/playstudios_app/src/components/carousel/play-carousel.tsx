//Create typescript react component PlayCarousel return nuka-carousel/lib/carousel
import { Box } from '@mui/material';
import CarouselWrapper from "components/carousel/carousel-wrapper";

import { useCallback, useEffect, useState } from "react";
import useWindowSize, { Size } from "src/hooks/useWindowSize";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//Import arrow icon
import arrow from 'assets/icons/arrow_icon.svg';

// import required modules
import { FreeMode } from "swiper";
import { generateUUID } from 'src/utils/general';

//define PlayCarouselOptions
export interface PlayCarouselOptions {
    elementWidth: number;
    cellSpacing?: number | 0;
    startSpacing?: number | 0;
    endSpacing?: number | 0;
    bottonStart?: boolean | true;
    elements: any[] | [] | undefined;
}

export default function PlayCarousel({ elements, elementWidth, cellSpacing, startSpacing, endSpacing, bottonStart }: PlayCarouselOptions) {
    //define state slidesToShow with useState 
    const [slidesToShow, setSlidesToShow] = useState(1);
    const [swiperRef, setSwiperRef] = useState(null);
    const [lastArrow, setLastArrrow] = useState<boolean>(true);

    const size: Size = useWindowSize();
    //Function calculate slidesToShow with size.width and options.elementWidth and options.cellSpacing default 0
    const calculateSlidesToShow = (width: number | undefined, elementWidth: number, cellSpacing: number = 0) => {
        if (width) {
            return ((width) / (elementWidth + cellSpacing));
        }
        return 1;
    }

    //useEffect setSlidesToShow on change size.width
    useEffect(() => {
        setSlidesToShow(calculateSlidesToShow(size.width, elementWidth, cellSpacing));
    }, [size]);

    //useCallback scrollRestart
    const scrollRestart = useCallback(() => {
        swiperRef && (swiperRef as any).setProgress(0, 300);
    }, [swiperRef]);

    //useEffect setSlidesToShow on change size.width
    useEffect(() => {
        if (!size.width || !elements?.length) return;
        if (bottonStart) {
            let elementWidth = 108;
            let cellSpacing = 12;
            let width = size.width;
            let element = elements?.length;

            if (width > ((elementWidth + cellSpacing) * element))
                setLastArrrow(false);
            else
                setLastArrrow(true);
        } else
            setLastArrrow(false);
        scrollRestart()
    }, [size.width]);

    //return Carousel
    return (
        <CarouselWrapper>
            <Swiper
                onSwiper={setSwiperRef as any}
                slidesOffsetBefore={startSpacing}
                slidesOffsetAfter={endSpacing}
                spaceBetween={cellSpacing}
                slidesPerView={slidesToShow}
                freeMode={true}
                modules={[FreeMode]}>
                {elements && elements.map((element, index) => {
                    return (
                        <SwiperSlide key={ generateUUID() }>
                            {element}
                        </SwiperSlide>
                    )
                })}

                {lastArrow &&
                    <SwiperSlide>
                        <Box sx={{
                            height: '176px',
                            width: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                            onClick={scrollRestart}>
                            <img src={arrow}></img>
                        </Box>
                    </SwiperSlide>
                }
            </Swiper>
        </CarouselWrapper>
    )
}