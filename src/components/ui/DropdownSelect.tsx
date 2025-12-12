import { useState } from 'react';

interface DropdownSelectProps {
	options: Array<string>;
	onSelectCategory: (option: string) => {};
	selectedCategory: string;
}

const DropdownSelect = ({
	options,
	onSelectCategory,
	selectedCategory,
}: DropdownSelectProps) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const toggle = () => {
		setShowDropdown((prev) => !prev);
	};

	const close = () => {
		setShowDropdown(false);
	};

	const onSelect = (option: string) => {
		onSelectCategory(option);
	};
	return (
		<div
			className='min-w-20 bg-white rounded-lg text-center relative cursor-pointer'
			tabIndex={0}
			onFocus={toggle}
			onBlur={close}>
			<div className='flex justify-between py-1 px-2'>
				<div>{selectedCategory}</div>
				<div
					className={`${
						showDropdown ? 'rotate-180' : ''
					} transition-transform ease-in duration-300`}>
					^
				</div>
			</div>
			{showDropdown ? (
				<div className='absolute rounded top-full bg-white z-10 shadow border capitalize'>
					{options?.map((option: string, i: number) => (
						<div
							key={`option-${i}`}
							onMouseDown={() => onSelect(option)}>
							{option}
						</div>
					))}
				</div>
			) : null}
		</div>
	);
};

export { DropdownSelect };
