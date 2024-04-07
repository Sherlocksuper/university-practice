import './home.css';
import Chat from "../chat/Chat.tsx";

export const Home = () => {
    return (
        <div id={'home'}>
            <div id={'home-content'}>
                <h1>Home</h1>
                <UserAvatar/>
            </div>
            <Chat/>
        </div>
    );
}

const UserAvatar = () => {
    return (
        <div id={'user-container'}>
            <img id={'user-avatar'} src={'src//assets/user.jpg'} alt={'user-avatar'}/>
            <UserFunction/>
        </div>
    );
}

const UserFunction = () => {
    return (
        <div id={'user-function'}>
            <ul>
                <p>功能1</p>
                <p>功能2</p>
                <p>功能3</p>
            </ul>
        </div>
    );
}