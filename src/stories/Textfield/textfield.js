export const Template = ({ label, placeholder }) => {
	return `
    <div class="textfield-container">
	      <label for="textfieldId" class="textfield-label">${label}</label>
	      <input
		      id="textfieldId"
		      class="textfield"
		      type="text"
		      placeholder="${placeholder}"
	      />
    </div>
  `;
};
