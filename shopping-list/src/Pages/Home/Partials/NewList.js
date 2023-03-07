import React from 'react'

// Firebase
import { db, auth } from '../../../firebase'
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function MyLists() {
  const [listTitle, setListTitle] = React.useState('')
  const [listDescription, setListDescription] = React.useState('')

  const submitToDB = (e) => {
    if (listTitle === '') {
      alert('Please enter a list title')
      return
    }
    // check if list has _ in it
    if (listTitle.includes("_")) {
      alert('List title cannot contain an underscore')
      return
    }
    // remove spaces from list title
    const listWithoutSpaces = listTitle.replace(" ", "_")
    e.preventDefault();
    // add to collection lists
    const path = "lists/"
    const docRef = doc(db, path, listWithoutSpaces);
    // check if list title already exists
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        // list title already exists
        alert('List title already exists')
        // reset form
        setListTitle('')
        setListDescription('')
      }
      else {
        // add to collection users lists
        setDoc(doc(db, path, listWithoutSpaces), {
          list_title: listTitle,
          list_title_without_spaces: listWithoutSpaces,
          description: listDescription,
          owner: auth.currentUser.uid,
          created_at: new Date(),
          last_edited_at: new Date(),
          shared_with: [],
          users: [auth.currentUser.uid],
          items: [],
          cost: 0,
          numItems: 0,
        });
        // reset form
        setListTitle('')
        setListDescription('')
      }
    })
  };
  // clear form
  const reset = () => {
    setListTitle('')
    setListDescription('')
  }

  return (
    <div className="px-[2.5vw] py-[3vh]">
      <h3 className="text-[3rem] font-semibold">Create New List</h3>
      <div className="h-[1vh]"></div>
      <div className="flex flex-col">
        <div>
          <input className="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
            type='text'
            placeholder='List Title'
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
          <div className="h-[2vh]"></div>
          <input className="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
            type='text'
            placeholder='List Description'
            value={listDescription}
            onChange={(e) => setListDescription(e.target.value)}
          />
        </div>
        <div className="h-[2.5vh]"></div>
        <h4 className="text-[2.5rem] font-semibold">Share with</h4>
        <div className="h-[1vh]"></div>
        <div className="flex on_desktop:gap-[1.25vw] on_mobile:gap-[2.5vh] on_mobile:flex-col">
          <button onClick={submitToDB} className="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Submit</button>
          <button onClick={reset} className="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Reset</button>
        </div>
      </div>
    </div>
  )
}
