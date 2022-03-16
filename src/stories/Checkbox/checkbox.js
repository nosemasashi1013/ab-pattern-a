export const defaultTemplate = ({ label, item }) => {
	return `
    <label for="checkboxId">${label}</label>
    <input id="checkboxId" type="checkbox" /><span>${item}</span>
  `;
};

export const groupTemplate = ({ groupLabel }) => {
	return `
    <h3 id="id-group-label">${groupLabel}</h3>
      <div role="group" aria-labelledby="id-group-label">
        <ul class="checkboxes">
          <li>
            <input
              type="checkbox" />
                項目1
          </li>
          <li>
            <input
              type="checkbox" />
                項目2
          </li>
          <li>
            <input
              type="checkbox" />
                項目3
          </li>
        </ul>
      </div>
  `;
};
