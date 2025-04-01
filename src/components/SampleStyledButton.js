import React from 'react';
import {Button, styled} from "@mui/material";
// import {styled} from "@mui/system";

const StyledButton = styled(Button)`
    background: deeppink;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;

    &:hover {
        background-color: darkmagenta;
    }
`;

function CustomButton() {

    return (
        <StyledButton>
            Hello Sahan
        </StyledButton>
    );
}

export default CustomButton;