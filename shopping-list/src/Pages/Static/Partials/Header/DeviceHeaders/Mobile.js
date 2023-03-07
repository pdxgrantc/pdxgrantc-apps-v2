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
import { ReactComponent as ChevronLeft } from '../../../Images/ChevronLeft.svg'
import { ReactComponent as Basket } from '../../../Images/Basket.svg'
import { ReactComponent as Bars } from '../../../Images/Bars.svg'


export default function MobileHeader() {
  const [user] = useAuthState(auth);

  if (user) {
    return (
      <>
        <div className="bg-dark_grey">
          <div className="flex justify-between px-[7vw]">
            <div className="self-center w-fit">
              <Link to="/" className="text-[2.25rem] font-bold">Ez Shop</Link>
            </div>

            <div className="h-[5%] w-auto my-auto">
              <TopNav icon={<Bars />}>
                <DropdownMenu></DropdownMenu>
              </TopNav>
            </div>

          </div>
        </div>
      </>
    )
  }
  else {

    return (
      <>
        <div className="bg-dark_grey">
          <div className="flex justify-between px-[7vw]">
            <div className="self-center w-fit">
              <Link className="text-[2.25rem] font-bold h-[59px]" to="/">Ez Shop</Link>
            </div>
            <div
              onClick={signInWithGoogle}
              className="flex font-semibold text-[1.75rem] hover:bg-text_grey h-fit py-[0.1rem] my-[0.4rem] px-[.5rem] rounded-[4px] hover:bg-opacity-50 cursor-pointer">
              <h1 className="whitespace-nowrap m-auto">Sign In</h1>
              <PersonIcon className="w-[45px] h-[45px] m-auto"></PersonIcon>
            </div>
          </div>
        </div>
      </>
    )
  }
}

function TopNav(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className='my-[2px]'>
      <Link to="#" className="text-[2.25rem] w-fit" onClick={() => setOpen(!open)}>
        <div className="flex transition duration-[300ms] rounded-[4px] px-[.4rem] py-[.0rem] h-min gap-[1vw]">
          <div className='my-[0px] w-[55px] h-[55px]'>
            {props.icon}
          </div>
        </div>
      </Link>
      {open && props.children}
    </div>
  );
}

/*
function NavItem(props) {
  const [user] = useAuthState(auth);
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
*/

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');

  /*
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  */

  function DropdownItem(props) {
    return (
      <Link to="#" className="menu-item hover:bg-text_white hover:bg-opacity-50 font-semibold text-[1.25rem] whitespace-nowrap" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    );
  }

  function TopLink() {
    if (window.location.pathname === "/") {
      return (
        <DropdownItem
          leftIcon={<Basket />}>
          <Link to="/MyLists">My Lists</Link>
        </DropdownItem>
      )
    }
    else {
      return (
        <DropdownItem
          leftIcon={<Basket />}>
          <Link to="/">Home</Link>
        </DropdownItem>
      )
    }
  }

  return (
    <div className="dropdown translate-x-[-150px] top-[60px] w-fit">
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit>

        <div className="menu">
          <TopLink></TopLink>
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
      </CSSTransition >

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit>

        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ChevronLeft />}>
            <h2>Go back</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Settings</DropdownItem>
        </div>

      </CSSTransition>

    </div >
  );
}
