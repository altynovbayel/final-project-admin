import React from 'react';
import {TextField} from "@mui/material";

function ContactsField({label, setState}) {
  return (
    <React.Fragment>
      <TextField
        id="filled-textarea"
        multiline
        variant="filled"
        label={label}
        fullWidth
        onChange={ e => setState(e.target.value)}
      />
    </React.Fragment>
  );
}

export default ContactsField;