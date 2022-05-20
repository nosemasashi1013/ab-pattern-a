import { groupTemplate } from "./checkbox.js";
import "./checkbox.scss";

export default {
	title: "Inputs/Checkbox",
	argTypes: {
		groupLabel: { control: "text" },
	},
};

export const Group = groupTemplate.bind({});
Group.args = {
	groupLabel: "グループラベル",
};
