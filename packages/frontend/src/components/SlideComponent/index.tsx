import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { photoSlide } from '@/pages/api/slideApi';
import ImageComponent from '@components/ImageComponent';
import 'swiper/css';

const SlideComponent = () => {
    // Variables
    const [slideItems, setSlideItems] = useState<any>([]);

    // Hooks
    useEffect(() => {
        setSlideItems(photoSlide);
    }, [slideItems]);

    return (
        <section>
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
                                objectFit={'cover'}
                                priority
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default SlideComponent;
