import { defaultTemplate } from "./checkbox.js";
import "./checkbox.scss";

export default {
	title: "Inputs/Checkbox",
	argTypes: {
		label: { control: "text" },
		item: { control: "text" },
	},
};

export const Default = defaultTemplate.bind({});
Default.args = {
	label: "ラベル",
	item: "項目",
};
