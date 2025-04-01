import React from 'react'
import { Box, Typography, Button, Avatar, Link } from "@mui/material";

function HomeMenu() {
  return (
    <>
            <Box sx={{ height: '100vh', display: 'flex' }}>
                <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 3 }}>
                    <Avatar src={'https://cdn-icons-png.flaticon.com/128/3845/3845814.png'} sx={{ width: 150, height: 150, mx: 'auto' }}></Avatar>
                    <Typography variant='h5' sx={{ textAlign: 'center', mt: 2 }}>
                        IoT Calculate by Nontakorn SAU
                    </Typography>
                    <Link to={'/cln'}>
                        <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: 'pink' }}>
                            <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }} >
                                Go to Calculate Number
                            </Typography>
                        </Button>
                    </Link>
                    <Button component={Link} to={'/clm'} fullWidth variant="contained" sx={{ mt: 2, backgroundColor: '#A569BD' }}>
                        <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }} >
                            Go to Calculate MoneyShare
                        </Typography>
                    </Button>


                </Box>
            </Box>
        </>
  )
}

export default HomeMenu