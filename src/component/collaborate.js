

import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Collaborate = () => {
    return (
        <div>
            <Box
                sx={{
                    width: 800,
                    height: 600,
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '500px',
                    marginTop: '-200px',
                    borderRadius: '16px',
                }}
            >
                <TextField
                    variant="outlined"
                    placeholder="text..."
                    className="mb-4"
                    sx={{
                        border: '1px solid black',
                        borderRadius: '5px',
                        marginTop: '-130px',
                    }}
                />
                <Button variant="contained" color="success" style={{ marginTop: '30px' }}>
                    Submit
                </Button>

                <h1 className='ml-[10px] text-black pt-28'><b>Previous Comments</b></h1>

                <Box className="mt-10" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="text-black"><b>File Sharing</b></h1>
                    <input type="file" style={{ marginTop: '10px', marginLeft:'200px' }} />
                    <Button 
                        variant="contained" 
                        color="primary" 
                        startIcon={<CloudUploadIcon />}
                        sx={{ marginTop: '10px' }}
                    >
                        Upload
                    </Button>
                </Box>
            </Box>
        </div>
    );
}

export default Collaborate;
