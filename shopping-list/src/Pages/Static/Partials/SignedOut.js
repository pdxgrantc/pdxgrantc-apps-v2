import React from 'react'
import { Helmet } from 'react-helmet'

// firebase
import { signInWithGoogle } from '../../../firebase'

export default function SignedOut() {
    return (
        <>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div class="w-full mx-[7vw] vertical py-[12vh] h-[90%] bg-black">
                <div>
                    <h2 class="text-[3.25rem] text-center">You must be signed in</h2>
                    <h2 class="text-[3.25rem] text-center">to Google to use this app</h2>
                </div>
                <div class="h-[9vh]"></div>
                <div class="m-auto w-fit">
                    <button onClick={signInWithGoogle} class="m-auto cursor-pointer w-fit text-[2.75rem] border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[2.75vw] py-[.4vh] w-fit align-middle">Sign In With Google</button>
                </div>
            </div>
        </>
    )
}
