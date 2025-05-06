import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type Category = {
  label: string;
  screenshots: string[];
};

type ProjectCarouselWithTabsProps = {
  categories: Category[];
};

const ProjectCarouselWithTabs = ({ categories }: ProjectCarouselWithTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {categories.map((category, index) => (
          <button
            key={category.label}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded ${
              index === activeIndex ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="relative"
        >
          {activeCategory.screenshots.map((src, index) => (
            <SwiperSlide key={index}>
              <img 
                src={src} 
                alt={`${activeCategory.label} Screenshot ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev absolute left-2 top-1/2 z-10 bg-gray-800 bg-opacity-60 rounded-full p-3 text-white cursor-pointer"></div>
          <div className="swiper-button-next absolute right-2 top-1/2 z-10 bg-gray-800 bg-opacity-60 rounded-full p-3 text-white cursor-pointer"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCarouselWithTabs;