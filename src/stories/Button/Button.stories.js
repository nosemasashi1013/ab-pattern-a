import { createButton } from "./Button";

export default {
	title: "Button/Button",
	argTypes: {
		backgroundColor: { control: "color" },
		label: { control: "text" },
		onClick: { action: "onClick" },
		primary: { control: "boolean" },
		size: {
			control: { type: "select" },
			options: ["small", "medium", "large"],
		},
		isDisabled: { control: "boolean" },
	},
};

const Template = ({ label, ...args }) => {
	// You can either use a function to create DOM elements or use a plain html string!
	// return `<div>${label}</div>`;
	return createButton({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "Button",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Button",
};

export const Disaled = Template.bind({});
Disaled.args = {
	size: "medium",
	label: "Disabled",
	isDisabled: true,
};
