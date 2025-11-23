import classNames from 'classnames';

type IconButtonProps = {
	children: React.ReactNode;
	href?: string;
	iconClassName?: string;
};

export const IconButton = ({
	children,
	href,
	iconClassName,
}: IconButtonProps) => {
	return (
		<a
			className={classNames(
				'bg-[#fafaff] rounded-full text-xl sm:text-2xl md:text-3xl w-8 h-8 md:w-[2.6rem] md:h-[2.6rem] m-0.5 relative cursor-pointer flex flex-row justify-center items-center',
				iconClassName
			)}
			href={href}
			target='_blank'
			rel='noopener noreferrer'>
			{children}
		</a>
	);
};
