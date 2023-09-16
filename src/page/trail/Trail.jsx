import {React, useContext } from 'react';
import { MyContext } from '../../Context';
const Trail = () => {
    const { state } = useContext(MyContext);
    const { movie } = state;
  return (
    <div>
      <div className="main">
        <div className="nav"></div>
        <div className="trailer"></div>
      </div>
    </div>
  )
}

export default Trail
