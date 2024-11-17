import { FC } from 'react';

interface ButtonProps {
	title: string;
	callback: () => void;
	backgroundColor: string;
}

const Button: FC<ButtonProps> = ({ title, callback }) => {
	return (
		<button
			className="bg-[#5741d9] p-[0.3em_0.7em] m-[1em] rounded-[4px] border-none text-white font-calibri text-[1.2em] hover:cursor-pointer hover:opacity-80"
			onClick={callback}
		>
			{title}
		</button>
	);
};

export default Button;
