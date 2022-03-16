import { Template } from "./radio.js";
import "./radio.scss";

export default {
	title: "Inputs/Radio",
	argTypes: {
		label: { control: "text" },
		item: { control: "text" },
	},
};

export const Radio = Template.bind({});
Radio.args = {
	label: "ラベル",
	item: "項目",
};
