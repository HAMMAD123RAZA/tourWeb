import React, { useState } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.css';


const Props = ({ id, image, info, price, name,removeCard }) => {
    const [state, setState] = useState(true)

    
    return (
        <>

            <div className='container d-flex justify-content-center'>
                <Box sx={{ marginBottom: '1rem' }} >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={image}
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {
                                    state ? info.substring(0, 124) : info
                                }
                                <Button onClick={() => {
                                    setState(!state)
                                }} >{state ? 'showMore' : 'showLess'}</Button>

                            </Typography>
                        </CardContent>
                        <CardActions>
                        <Button variant="contained" onClick={() => removeCard(id)}>
    Not Interested
</Button>

                        </CardActions>
                    </Card>
                </Box>
            </div>  
        </>
    )
}

export default Props
