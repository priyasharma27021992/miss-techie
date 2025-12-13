import { useState } from 'react';

interface DropdownSelectProps {
	options: Array<string>;
	onSelectCategory: (option: string) => void;
	selectedCategory: string;
}

const DropdownSelect = ({
	options,
	onSelectCategory,
	selectedCategory,
}: DropdownSelectProps) => {
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen((prev) => !prev);
	};

	const onSelect = (option: string) => {
		onSelectCategory(option);
	};

	return (
		<div className='relative inline-block'>
			<button
				className='min-w-20 bg-white rounded-lg flex justify-center items-center gap-2'
				aria-haspopup='listbox'
				aria-expanded={open}
				onClick={toggle}>
				<span>{selectedCategory}</span>
				<span aria-hidden={true}>{open ? '▲' : '▼'}</span>
			</button>

			{open ? (
				<ul
					className='absolute top-full left-0 bg-white z-10 mt-1 w-full bg-white rounded shadow border'
					role='listbox'>
					{options?.map((option: string) => (
						<li key={option}>
							<button
								className='border-b px-6 py-1 last:border-none'
								onClick={() => onSelect(option)}>
								{option}
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export { DropdownSelect };
