import React from 'react';
import PropTypes from "prop-types";

function Bangtan({ name, picture, rating}) {
  return (
    <div>
      <h3>L love {name}!!!</h3>
      <h4>{rating} / 7</h4>
      <img src={picture} alt={name}  />
    </div>
  );
}

Bangtan.prototype= {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const bts = [
  {
    id:"1",
    name:"jimin",
    image: "https://pbs.twimg.com/media/Ecz-SzmXYAghDYz?format=jpg&name=small",
    rating: 6
  },
  {
    id: "2",
    name: "jk",
    image: "https://pbs.twimg.com/media/Ecz-TRuXsAIBCD9?format=jpg&name=small",
    rating: 5
  },
  {
    id: "3",
    name: "탄이들",
    image: "https://pbs.twimg.com/media/Ecz65BnU8AAaBNc?format=jpg&name=small",
    rating: 4
  }
]

function App() {
  return (
    <div>
      {bts.map(member => (
        <Bangtan key={member.id} name={member.name} picture={member.image} rating={member.rating} />
      ))}
    </div>
  );
}

export default App;
