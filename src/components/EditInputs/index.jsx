import React from 'react';
import c from './EditInputs.module.scss'

function EditInputs({text, setState}) {
  return (
    <>
      <div className={c.container}>
        <p>{text}</p>
        <input type="text" placeholder={text} onChange={ e => setState(e.target.value)}/>
      </div>
    </>
  );
}

export default EditInputs;