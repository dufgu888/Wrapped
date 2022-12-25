import { useState } from "react";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";

const Carousel = ({ children, items }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const len = children.length;

	return (
		<div className="overflow-hidden relative">
			<div
				className={`flex flex-row w-[${(100 / items) * len}%] transition-all`}
				style={{ transform: `translateX(-${(currentIndex / len) * 100}%)` }}>
				{children}
			</div>
			<div
				className="absolute right-0 z-5 h-[100%] top-0 flex flex-col justify-center bg-gradient-to-l from-[#ffffffff] to-[#00000000] text-white w-[50px] items-center text-[50px]"
				onClick={(e) => {
					setCurrentIndex((index) => {
						if (index < len - items) return (index + 1) % len;
						return index;
					});
				}}>
				<TbChevronRight />
			</div>
			<div
				className="absolute left-0 z-5 h-[100%] top-0 flex flex-col justify-center bg-gradient-to-l to-[#ffffffff] from-[#00000000] text-white w-[50px] items-center text-[50px]"
				onClick={(e) => {
					setCurrentIndex((index) => {
						if (index > 0) return (index - 1) % len;
						return index;
					});
				}}>
				<TbChevronLeft />
			</div>
		</div>
	);
};

export default Carousel;
