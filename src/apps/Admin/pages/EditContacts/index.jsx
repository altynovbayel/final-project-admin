import React from 'react';
import BtnRoutes from "../../../../components/BtnRoutes";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {editContacts, getContacts} from "../../../../configs";
import ContactsField from "../../../../components/ContactsInput";

function EditContacts() {
  const [contacts, setContacts] = React.useState(null)
  const [email, setEmail] = React.useState(null)
  const [address, setAddress] = React.useState(null)
  const [data, setData] = React.useState(null)
  
  function get(){
    getContacts().then(r => setData(r.data))
  }
  
  React.useEffect(() => {
    get()
  }, [])
  
  function handleSubmit(){
    const obj = {
      email: email ? email : data.email,
      contacts: contacts ? contacts : data.contacts,
      address: address ? address : data.address,
    }
    editContacts(obj).then(r => r && get())
  }
  
  return (
    <React.Fragment>
      <Typography
        variant={'h4'}
        style={{textAlign:'center',}}
      >
        Изменить контакты
      </Typography>
      <Box
       marginTop={'20px'}
       marginLeft={"auto"}
       marginRight={"auto"}
       width={'30%'}
      >
        <Grid
          display={'flex'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={'10px'}
          m={'20px 0'}
         >
          <p> {data?.contacts} </p>
          <p> {data?.email} </p>
          <p> {data?.address} </p>
        </Grid>
       
        <Grid
          display={'flex'}
          justifyContent={"center"}
          alignItems={'center'}
          gap={'20px'}
          flexDirection={'column'}
        >
          
          <ContactsField label={'Телефон'} setState={setContacts}/>
          <ContactsField label={"Почта"} setState={setEmail}/>
          <ContactsField label={"Адрес"} setState={setAddress}/>
         
          <Button
            variant="outlined"
            onClick={handleSubmit}
          >
            Изменить
          </Button>
        </Grid>
      </Box>
    </React.Fragment>
    
  );
}

export default EditContacts;