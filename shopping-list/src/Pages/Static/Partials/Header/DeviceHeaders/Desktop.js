import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'rsuite'

// Firebase
import { auth, signInWithGoogle, signOutUser } from '../../../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

// static
import { ReactComponent as PersonIcon } from '../../../Images/PersonIcon.svg'


export default function DesktopHeader() {
    const [user] = useAuthState(auth);

    return (
        <div class="bg-dark_grey bg-opacity-90 w-[100%]">
            <div class="flex justify-between pr-[7vw]">
                <Link class="block w-fit bg-black px-[7vw] text-[3.25rem] font-bold cursor-pointer py-0" to="/">EZ Shop</Link>

            </div>
        </div>

    )
}

function Container() {
    return (
        <Navbar>
            <NavItem icon={<PersonIcon />} />
            <DropdownMenu></DropdownMenu>
        </Navbar>
    );
}

function Navbar(props) {
    return (
        <nav>
            <ul class="">{props.children}</ul>
        </nav>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li class="relative">
            <a href="#" class="" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}


function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" class="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span class="icon-button">{props.leftIcon}</span>
                {props.children}
                <span class="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames=""
                unmountOnExit
                onEnter={calcHeight}>
                <div class="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}





function SignInComponent() {
    return (
        <>
            <button onClick={signInWithGoogle} class="bg-button_accent_color h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]">Sign In</button>
        </>
    )
}

function SignOutComponent() {
    return auth.currentUser && (
        <>
            <button onClick={signOutUser} class="bg-button_accent_color h-fit align-middle px-[1.5vw] py-[.5vw] hover:bg-button_pressed_color hover:ease-in-out duration-[350ms]">Sign Out</button>
        </>
    )
}
