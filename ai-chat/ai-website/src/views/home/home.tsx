import './home.css';
import Chat from "../chat/Chat.tsx";
import React from "react";

export const Home = () => {
    return (
        <div id={'home'}>
            <div id={'home-content'}>
                <h1>Zing</h1>
                <UserAvatar/>
            </div>
            <Chat/>
        </div>
    );
}

const UserAvatar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div id={'user-container'}>
            <img className={'user-avatar'} src={'src//assets/user.jpg'} alt={'user-avatar'}
                 onClick={() => setOpen(!open)}/>
            <UserFunction open={open} onClose={() => setOpen(false)}/>
        </div>
    );
}

interface UFProps {
    open: boolean,
    onClose: () => void
}

const UserFunction = ({open, onClose}: UFProps) => {

    return (
        <div className={'user-function'} style={{display: open ? 'block' : 'none'}}>
            <div className={'container_bar'}>
                <h3 className={'user-setting'}>Settings</h3>
                <div className={'return'} onClick={() => onClose()}>×</div>
            </div>
            <div className={'user-function-list'}>
                <UFunctionItem title={'Dark Mode'} onClick={() => {}} type={'toggle'}/>
            </div>
        </div>
    );
}

interface FunctionItem {
    title: string,
    type: string,
    onClick: () => void
}

const UFunctionItem = ({title, onClick}: FunctionItem) => {
    return (
        <div className={'user-function-item'} onClick={onClick}>{title}</div>
    );
}