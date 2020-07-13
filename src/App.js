import React from 'react';

function Bangtan({fav}) {
  console.log(fav);
  return<h3>L love {fav}!!!</h3>
}

function App() {
  return (
    <div>
      <Bangtan 
      fav="bts"  
      member ="jimin"
      />
    </div>
  );
}

export default App;
