import React from 'react';

function Data(props) {
  console.log(props);
  return (
    <div>
      {props.goal}
    </div>
  );
}

export default Data;
