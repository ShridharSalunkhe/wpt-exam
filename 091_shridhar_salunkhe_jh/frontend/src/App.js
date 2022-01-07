import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  let appname = "MyChatApp";
  let stdname = "Shridhar salunkhe";
  let id = "091_jh";

  let [msg, setmsg] = useState("");
  let [list, setlist] = useState([]);

  const changeMsg = (e) => {
    setmsg(e.target.value);
  };

  const sendmsg = async () => {
    if (msg === "") {
      alert("empty text not alloweded");
    }
    const url = "http://localhost:5000/addmsg";
    const data = { msg: msg };
    await axios.post(url, data);
    const newlist = [data, ...list];
    setlist(newlist);

    setmsg("");
  };

  const getmsg = async () => {
    const url = "http://localhost:5000/msgs";
    const result = await axios.get(url);

    const list = result.data;
    const newlist = [...list];
    setlist(newlist);
  };

  useEffect(() => getmsg(), []);

  return (
    <div>
      <div className="bg-dark text-light ">
        <h2 className="p-2">
          {appname} (by {stdname} {id} )
        </h2>
      </div>
      <div className="">
        <input
          className=" w-75"
          type="text"
          placeholder="lets chat here....."
          value={msg}
          onChange={changeMsg}
        ></input>
        <input
          className="w-25"
          type="button"
          value="send"
          onClick={sendmsg}
        ></input>
      </div>

      {list.map((item, index) => (
        <div key={index} className="form-control form-control-sm">
          {item.msg}
        </div>
      ))}
    </div>
  );
}
