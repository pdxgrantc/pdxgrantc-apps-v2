import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

// Firebase
import { auth, signInWithGoogle, signOutUser } from '../../../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

// static
import { ReactComponent as PersonIcon } from '../../../Images/PersonIcon.svg'
import { ReactComponent as CogIcon } from '../../../Images/Cog.svg'
import { ReactComponent as ChevronIcon } from '../../../Images/Chevron.svg'

export default function DesktopHeader() {
    const [user] = useAuthState(auth);

    if (user) {
        return (
            <>
                <div class="bg-dark_grey bg-opacity-90 w-[100%] h-[80px]">
                    <div class="h-[100%] flex justify-between pr-[3vw]">
                        <Link class="align-middle h-[100%] block w-fit bg-black px-[7vw] text-[3.25rem] font-bold cursor-pointer " to="/">EZ Shop</Link>
                        <div class="my-auto flex justify-around gap-[1.5vw]">
                            <h1 class="m-auto text-[2.5rem] font-semibold">{user.displayName}</h1>
                            <NavItem icon={<PersonIcon />}>
                                <DropdownMenu></DropdownMenu>
                            </NavItem>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else {

        return (
            <>
                <div class="bg-dark_grey bg-opacity-90 w-[100%]">
                    <div class="flex justify-between pr-[3vw]">
                        <Link class="block w-fit bg-black px-[7vw] text-[3.25rem] font-bold cursor-pointer py-0" to="/">EZ Shop</Link>
                        <div
                            onClick={signInWithGoogle}
                            className="flex font-semibold text-[1.75rem] hover:bg-text_grey h-fit my-auto py-[0.1rem] px-[.5rem] rounded-[4px] hover:bg-opacity-50 cursor-pointer">
                            <h1 class="whitespace-nowrap m-auto">Sign In</h1>
                            <PersonIcon className="w-[54px] h-[54px] m-auto"></PersonIcon>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <Link to="#" className="icon-button icon-button-dimensions" onClick={() => setOpen(!open)}>
                {props.icon}
            </Link>

            {open && props.children}
        </li>
    );
}


function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');

    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <Link to="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </Link>
        );
    }

    return (
        <div className="dropdown">

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit>

                <div className="menu">
                    <DropdownItem
                        leftIcon={<PersonIcon />}>
                        My Profile
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <div onClick={signOutUser}>
                        <DropdownItem
                            leftIcon={<PersonIcon />}>
                            Sign Out
                        </DropdownItem>
                    </div>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit>

                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ChevronIcon />}>
                        <h2>Go back</h2>
                    </DropdownItem>
                </div>

            </CSSTransition>

        </div>
    );
}
