import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';

// Import required Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
  // Create a ref to store the Swiper instance
  const swiperRef = useRef<SwiperType | null>(null);

  // Custom navigation functions
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-4 flex-wrap">
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

      {/* Carousel with custom navigation */}
      <div className="relative">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="rounded overflow-hidden"
        >
          {activeCategory.screenshots.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <img 
                  src={src} 
                  alt={`${activeCategory.label} Screenshot ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom navigation buttons */}
        <button 
          onClick={goPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button 
          onClick={goNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProjectCarouselWithTabs;