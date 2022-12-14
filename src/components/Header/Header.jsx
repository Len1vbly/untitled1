import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button onclick={onClose}>Off</Button>
            <span className={"username"}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;