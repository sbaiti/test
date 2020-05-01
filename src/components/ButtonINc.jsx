import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonINc = ({ action, click }) => {
    return (
        <div>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => click()}
            >
                <span>{action}</span>
            </Button>
        </div>
    );
};

export default ButtonINc;