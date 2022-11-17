import styled from "styled-components";

export const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: 12px;
    margin: 12px 1%;
    p{
        font-size: 12px;
        margin: 0;
        overflow-wrap: break-word;  
        word-wrap: break-word; 
        word-break: break-word;
        text-align: center;
    }
    svg{
        font-size: 30px;
        margin-right: 6px;
    }
`