import "./button.scss";

export const createButton = ({
	primary = false,
	isDisabled = false,
	size = "medium",
	backgroundColor,
	label,
	onClick,
}) => {
	const btn = document.createElement("button");
	btn.type = "button";
	btn.innerText = label;
	btn.addEventListener("click", onClick);
	btn.disabled = isDisabled;

	const mode = primary ? "btn--primary" : "btn--secondary";
	const disabled = isDisabled ? "btn--disabled" : "";
	btn.className = ["btn", `btn--${size}`, mode, disabled].join(" ");

	btn.style.backgroundColor = backgroundColor;

	return btn;
};
