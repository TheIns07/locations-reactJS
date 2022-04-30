import {Link} from "react-router-dom";
import style from './MainNavigation.module.css';

function MainNavigation(){
    return (
    <header className = {style['header']}>
        <div className = {style['logo']}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/new'>New Meetups</Link>
                </li>
                <li>
                    <Link to = '/favorites'>Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>);

}

export default MainNavigation;