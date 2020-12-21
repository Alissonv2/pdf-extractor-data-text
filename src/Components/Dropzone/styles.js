import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerDropzone = styled.div`
    height: 200px;
    width: 470px;
    border: dashed 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    transition: background-color 0.2s;
    transition: color 0.2s;
    transition: height 0.2 ease;
    margin-bottom: 10px;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #ff9000;
    }
`;

export const Container = styled.section`
    display: flex;
    width: 600px;
    height: 500px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    background-color: #47A4A5;
    border-radius: 4px;
`;

export const Button = styled.button`
    width: 200px;
    height: 40px;
    background-color: #ff9000;
    color: #fff;
    border: 0;
    border-radius: 30px;
    font-weight: bold;
    transition: background-color 0.8s;
    margin-top: 20px;

    &:hover {
        cursor: pointer;
        background-color: ${shade(0.2, '#ff9000')}
    }
`;
