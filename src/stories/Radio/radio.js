export const Template = ({ label, item }) => {
	return `
    <label for="checkboxId">${label}</label>
    <input id="checkboxId" type="radio" /><span>${item}</span>
  `;
};
