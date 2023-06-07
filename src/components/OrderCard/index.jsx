import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Avatar, CardHeader, Container} from "@mui/material";
import {red} from "@mui/material/colors";
import {useNavigate} from "react-router-dom";
import {FcCheckmark} from "react-icons/fc";


export default function OutlinedCard({email ,name, date, totalPrice, productId , userId, state, phone}) {
  const navigate = useNavigate()
  return (
    <Container maxWidth={'lg'}>
      <Box  sx={{ minWidth: 275, marginBottom: '1rem' }}>
        <Card variant="outlined">
          <CardContent>
            <CardHeader
              avatar={
                <Avatar sx={{ backgroundColor: red[500] }} aria-label="recipe">
                  {name.slice(0,1)}
                </Avatar>
              }
              title={email}
              subheader={date}
            />
            <div>
              <p style={{marginBottom: '1rem'}}>
                {name}
              </p>
              <p style={{marginBottom: '1rem'}}>
                {phone}
              </p>
            </div>
            <Typography variant="p" component="div">
              Заказ на сумму {totalPrice} cом
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => navigate(`/orders/${userId}/${productId}`)}
              style={{marginRight: '1rem'}}
            >
              Подробнее
            </Button>
            {
              state &&
              <Typography variant={'p'} >
                Принято
                <FcCheckmark/>
              </Typography>
            }
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
