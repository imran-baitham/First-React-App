const NewForm = () => {
  return (
    <div className="form__input">
      <form>
        <label>title</label>
        <input type="text" />
        <label>Number</label>
        <input type="text" min="0.01" />
        <label>Date</label>
        <input type="date" />
        <div className="button__submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewForm;
