import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { photoSlide } from '@/pages/api/slide';
import ImageComponent from '@components/ImageComponent';
import classNames from 'classnames';
import styles from './slideStyles.module.scss';
import 'swiper/css';

const Slide = () => {
    const [slideItems, setSlideItems] = useState<any>([]);

    // Setup ClassName
    const slideClassName = classNames(styles['slide-image']);

    // Hook
    // const ref = useRef();

    useEffect(() => {
        setSlideItems(photoSlide);
    }, [slideItems]);

    useEffect(() => {
        const img = document.getElementById('image-id');
        //or however you get a handle to the IMG
        // const width = img?.clientWidth;
        const height = img?.clientHeight;
        // const naturalWidth = img?.naturalWidth;
        const naturalHeight = img?.naturalHeight;
        console.log('imagee -->', height, naturalHeight);
    }, []);

    return (
        <ImageComponent
            id="image-id"
            className={slideClassName}
            src={'http://via.placeholder.com/1920x500'}
            alt={'test'}
            objectFit={'cover'}
            width={1920}
            height={500}
        />
    );

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
                                className={slideClassName}
                                src={item?.src}
                                alt={item?.name}
                                objectFit={'cover'}
                                width={1920}
                                height={500}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default Slide;
