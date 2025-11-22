import { useEffect, useMemo, useState } from 'react';
import type { Image } from '../../types/common';

interface ImageSlideShowProps {
	images?: Array<Image>;
}

export const ImageSlideShow = ({ images = [] }: ImageSlideShowProps) => {
	const [index, setIndex] = useState(0);

	const memoizedImages = useMemo(() => images, [images]);

	useEffect(() => {
		if (memoizedImages?.length === 1) return;
		const interval = setInterval(() => {
			setIndex((prev) => (prev === memoizedImages.length - 1 ? 0 : prev + 1));
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [memoizedImages.length]);

	if (memoizedImages.length === 0) return null;
	return (
		<div
			style={{
				overflow: 'hidden',
				width: '100%',
				height: '100%',
			}}>
			<div
				style={{
					display: 'flex',
					transition: 'transform 0.6s ease-in',
					transform: `translateX(-${index * 100}%)`,
				}}>
				{images?.map((image) => (
					<img
						src={image.src}
						alt={`${image.alt} Website`}
						style={{ width: '100%', flexShrink: 0 }}
					/>
				))}
			</div>
		</div>
	);
};
