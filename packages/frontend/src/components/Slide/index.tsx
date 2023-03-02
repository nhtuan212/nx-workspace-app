import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { photoSlide } from '@/pages/api/slide';
import Image from '@components/Image';
import 'swiper/css';

const Slide = () => {
    const [slideItems, setSlideItems] = useState<any>([]);

    // Hook
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
                            <Image src={item?.src} alt={item?.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </section>
    );
};

export default Slide;
