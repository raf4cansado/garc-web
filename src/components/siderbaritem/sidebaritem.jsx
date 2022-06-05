import React from "react";
import { Container } from "./styles";

const Sidebaritem = ({Icon, Text}) => {
    return (
        <Container>
            <Icon />
            {Text}
        </Container>
    )
}

export default Sidebaritem