import styled from "styled-components";

export const Main = styled.div`
    width:100%;
    height:100%;
    padding:2%;
    display: flex;
    flex-direction: column;
    aling-items: center;
    jutify-content:center;
`;
export const TitleDiv = styled.div`

`;
export const SectionButtons = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;
export const DivButtons = styled.div`
    min-width:30%;
`;
export const DivIconButtons = styled(DivButtons)`
    border-top: solid 3px;
    margin: 10px;
`;
export const H1 = styled.h1`
    font-weight:bold;
    font-size: 30px;
`;
export const H3 = styled.h3`
    font-weight: bold;
    font-size: 16px;
`;
export const H4 = styled.h4`
    font-weight: bold;
    font-size: 14px;
`;
export const Image = styled.img`
    width:90%
`;