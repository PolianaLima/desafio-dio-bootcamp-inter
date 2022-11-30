import {ButtonContainer} from "./styles";

const ButtonOperation = ({label, onClick})=> {
    return (<ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export {ButtonOperation};
