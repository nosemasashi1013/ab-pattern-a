export const defaultTemplate = ({ label, value, id, checked }) => {
	return `
    <label
      class="checkbox"
      for=${id}
    >
      <input
        id=${id}
        class="checkbox-input visually-hidden new-info-filter"
        type="checkbox"
        name="name"
        value=${value}
        checked=${checked}
      />
      <span class="checkbox-label">${label}</span>
    </label>
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
