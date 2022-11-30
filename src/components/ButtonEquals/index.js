import {ButtonContainer} from "./styles";

const ButtonEquals = ({label, onClick})=> {
    return (<ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export {ButtonEquals};
