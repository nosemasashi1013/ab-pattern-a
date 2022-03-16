import { Template } from "./textfield";
import "./textfield.scss";

export default {
	title: "Inputs/Textfield",
	argTypes: {
		label: { control: "text" },
		placeholder: { control: "text" },
	},
};

export const Textfield = Template.bind({});
Textfield.args = {
	label: "ラベル",
	placeholder: "プレースホルダー",
};
