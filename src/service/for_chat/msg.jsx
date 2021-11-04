const Msg = ({ msglist }) => {
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  //var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return (
    <div className="msg">
      <ul>
        {msglist.map((item) => {
          return (
            <div className="frame">
              <li key={item.id}>{item}</li>
              <p className="datetime">{dateTime}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Msg;
