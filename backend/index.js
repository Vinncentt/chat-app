const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const response = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret:username, first_name: username},
        {headers: {"private-key": "547ed299-b1ff-4e84-b814-2ebdcb317670"}}     
    )
    res.status(response.status).json(response.data)
  }catch(e){
      return res.status(e.response.status).json(e.response.data);
  }
  
});



app.listen(3001);