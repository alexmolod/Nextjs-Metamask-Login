const Button = ({
	text,
	color,
	onClick,
}) => {
	const colorVariants = {
    red: 'bg-red-100 text-red-900 hover:bg-red-200 focus-visible:ring-red-500',
    teal: 'bg-teal-100 text-teal-900 hover:bg-teal-200 focus-visible:ring-teal-500',
    lime: 'bg-lime-100 text-lime-900 hover:bg-lime-200 focus-visible:ring-lime-500',
    green: 'bg-green-100 text-green-900 hover:bg-green-200 focus-visible:ring-green-500',
    fuchsia: 'bg-fuchsia-100 text-fuchsia-900 hover:bg-fuchsia-200 focus-visible:ring-fuchsia-500',
  }
	
	const className = `${colorVariants[color]} mb-3 inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-solid`;

	const tick = typeof Audio !== "undefined" ? new Audio("./click.mp3") : undefined;
	
	const onClickBtn = () => {
		tick?.play();
		onClick();
	};

	return (
		<button
			type="button"
			className={className}
			onClick={() => onClickBtn()}
		>
			{text}
		</button>
	)
};

export default Button;