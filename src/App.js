import { useState } from "react";

function App() {

  const [name, setName] = useState("Eray");
  const [age, setAge] = useState(10);
  const [friends, setFriedns] = useState(["ahmet", "murat"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34756 });


  return (
    <div className="App">

      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Mehmet")}>Change Name</button>
      <button onClick={() => setAge(23)}>Change Age</button>

      <hr />
      <br /><br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (<div key={index}>{friend}</div>))}
      <button onClick={() => setFriedns(["ayşe", ...friends])}>Add New Friend</button>
      
      <hr />
      <br /><br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <button onClick={() => setAddress({ ...address, title: "Ankara", zip: 55555 })}>Change Adress</button>


      
    </div>
  );
}

export default App;
