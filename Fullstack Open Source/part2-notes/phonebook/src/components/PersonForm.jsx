const PersonForm = ({
  newName,
  handleChangeName,
  newNumber,
  handleChangeNumber,
  handleSubmit,
}) => (
  <form>
    <div>
      name: <input value={newName} onChange={handleChangeName} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleChangeNumber} />
    </div>
    <div>
      <button type="submit" onClick={handleSubmit}>
        add
      </button>
    </div>
  </form>
);
export default PersonForm;
