import React from 'react';
import { TextField } from '@mui/material';

interface Props {
    label: string;
    type: string;
};

const Input: React.FC<Props> = ({label, type}) => {

    return (
        <div style={{
            width:'100%'
        }}>
            <TextField
                size='small'
                id='simples-input'
                label={label}
                variant='outlined'
                fullWidth
                type={type}
            />
        </div>
    )
}

export {
    Input
}