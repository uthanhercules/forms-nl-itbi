import React, { useState } from 'react';

import './home.style.scss';

function Home() {
  const [firstQuestion, setFirstQuestion] = useState(false);
  const [secondQuestion, setSecondQuestion] = useState(false);

  return (
    <div className='Home'>
      <h1>Início Form</h1>
    </div>
  );
}

export default Home;
