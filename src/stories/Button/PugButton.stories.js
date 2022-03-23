import { renderer } from "storypug";
import Button from "../../components/base/Button.pug";

const { html } = renderer();

export default {
	title: "Sample/Button",
};

export const Default = () => html(Button, { type: "submit" }, "label");
