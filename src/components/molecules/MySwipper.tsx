import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { cn } from '@/utils/cn';
import FunfactCard from '../atoms/card/FunfactCard';

interface SwiperItem {
  id: number;
  name: string;
  src: string;
  funcfact?: string;
  imgSrc?: string;
}

interface MySwiperProps {
  data: SwiperItem[];
  className?: string;
  isFuncFact?: boolean;
}

const MySwiper: React.FC<MySwiperProps> = ({ data, className, isFuncFact = false }) => {
  return (
    <Swiper
      speed={isFuncFact ? 1000 : 1500}
      spaceBetween={isFuncFact ? 30 : 5}
      grabCursor={isFuncFact ? true : false}
      slidesPerView={isFuncFact ? 0 : 1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={
        isFuncFact
          ? {
              1500: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 4,
              },
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }
          : undefined
      }
      navigation={true}
      modules={[Autoplay]}
      loop
      className={cn('mySwipperflex bg-primary px-24 overflow-hidden', className)}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className={`border-4 border-white relative group transform transition-transform duration-500 ${
              isFuncFact ? 'hover:rotate-y-180' : ''
            }`}
          >
            {isFuncFact && (
              <FunfactCard
                funcfact={item.funcfact}
                imgSrc={item.imgSrc}
              />
            )}
            <Image
              src={item.src}
              alt={`${item.name} pict`}
              width={isFuncFact ? 300 : 400}
              height={300}
              className='bg-cover object-cover w-full'
              priority={false}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
