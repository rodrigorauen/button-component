import styled from "styled-components";

export const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
text-align: center;
min-width:300px;
width:100%;
height: 40px;
padding-horizontal: 5px;
border: none;
${props => props.color.normal};
&:hover {
    ${props => props.color.hover};
};
&:active {
    ${props => props.color.active};
};
&:disabled {
    ${props => props.color.disabled};
};
svg{
    margin-left: 90%;
};
`;
