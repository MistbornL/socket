const InpButt = ({ handleChange, clickHandle }) => {
  return (
    <div className="input">
      <input
        onChange={handleChange}
        type="text"
        class="form-control"
        aria-label="Type Message..."
        aria-describedby="inputGroup-sizing-sm"
      ></input>
      <button type="submit" class="btn btn-info" onClick={clickHandle}>
        Send
      </button>
    </div>
  );
};

export default InpButt;
