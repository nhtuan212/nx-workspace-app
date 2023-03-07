import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { photoSlide } from '@/pages/api/slide';
import ImageComponent from '@components/ImageComponent';
import 'swiper/css';

const Slide = () => {
    // Hook
    const [slideItems, setSlideItems] = useState<any>([]);
    useEffect(() => {
        setSlideItems(photoSlide);
    }, [slideItems]);

    return (
        <section className="slide">
            {slideItems && (
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={true}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {slideItems.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <ImageComponent
                                src={item?.src}
                                alt={item?.name}
                                width={1920}
                                height={500}
                                objectFit={'cover'}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default Slide;
