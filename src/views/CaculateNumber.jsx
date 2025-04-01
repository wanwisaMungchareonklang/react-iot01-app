import React from 'react'
import { Box, Typography, Button, Avatar, Link, TextField, FormControl, Menu } from "@mui/material";

function CaculateNumber() {
  return (
    <>
    <Box sx={{ height: '100vh', display: 'flex' }}>
        <Box sx={{ width: '70%', boxShadow: 2, mx: 'auto', my: 'auto', p: 5 }}>
            <Avatar src={'https://cdn-icons-png.flaticon.com/128/3845/3845843.png'} sx={{ width: 150, height: 150, mx: 'auto' }}/>
            <Typography variant='h5' sx={{ textAlign: 'center', mt: 2 }}>
                เครื่องคิดเลข
            </Typography>
            <Typography sx={{ mt: 2 }}>
                ตัวเลขตัวที่1
            </Typography>
            <TextField variant='outlined' fullWidth type='number' />
            <Typography sx={{ mt: 2 }}>
                ตัวเลขตัวที่2
            </Typography>
            <TextField variant='outlined' fullWidth type='number' />
            <Typography sx={{ mt: 2 }}>
                เลือกเครื่องหมายคำนวณ
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }}/>
            <select >
                <MenuItem value={'+'}>+ บวก</MenuItem>
                <MenuItem value={'-'}>+ ลบ</MenuItem>
                <MenuItem value={'*'}>+ คูณ</MenuItem>
                <MenuItem value={'/'}>+ หาร</MenuItem>

            </select>
        </Box>

    </Box>
    </>
  )
}

export default CaculateNumber




