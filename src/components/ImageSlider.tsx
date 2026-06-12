import { useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";

type ImageSliderProps = {
    images: string[]
}
export function ImageSlider({ images }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => setCurrentIndex((curr) => curr === images.length - 1 ? 0 : curr + 1);

    const slideVariants = {
        enter: {
            x: "-100%",
            opacity: 0,
            transition: { duration: 0.7, ease: "easeInOut" },
        },
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeInOut" },
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: { duration: 0.7, ease: "easeInOut" },
        },
    } as const;

    return (
        <div className="relative flex justify-center w-auto h-56 ">
            {/* Background Preview 2 (Far Right Stack) */}
            {images.map((element, index) => {
                const isNextImage = index === (currentIndex + 2) % images.length;
                return isNextImage && (
                    <motion.img
                        key={index}
                        layout
                        initial={{ opacity: 0, right: 50 }}
                        animate={{ opacity: 2, right: 30 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
                        src={element}
                        alt=""
                        className="absolute w-50 h-full z-1 rounded-lg brightness-30 object-cover"
                    />
                )
            })}

            {/* Background Preview 1 (Middle Right Stack) */}
            {images.map((element, index) => {
                const isNextImage = index === (currentIndex + 1) % images.length;
                return isNextImage && (
                    <motion.img
                        key={index}
                        layout
                        initial={{ opacity: 0, right: 20 }}
                        animate={{ opacity: 1.4, right: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                        src={element}
                        alt=""
                        className="absolute w-50 h-full z-2 rounded-lg brightness-60 object-cover"
                    />
                )
            })}
            <div className="flex relative group overflow-hidden rounded-lg z-3 w-56">
                <AnimatePresence initial={true}>
                    <motion.img key={currentIndex}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        src={images[currentIndex]}
                        className="absolute right-0 h-full rounded-lg"
                        onClick={next} />
                </AnimatePresence>
            </div>
        </div>
    )
}