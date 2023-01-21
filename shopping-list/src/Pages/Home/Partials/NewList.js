import React from 'react'

// Firebase
import { db } from '../../../firebase'
import { doc, setDoc } from "firebase/firestore";

export default function MyLists() {
  const [listTitle, setListTitle] = React.useState('')
  const [listDescription, setListDescription] = React.useState('')

  const submitToDB = (e) => {
    if (listTitle === '') {
      alert('Please enter a list title')
      return
    }
    e.preventDefault();
    // add to collection
    setDoc(doc(db, "lists", listTitle), {
      list_title: listTitle,
      description: listDescription,
      created_at: new Date(),
      last_edited_at: new Date(),
      items: [],
      shared_with: [],
      cost: 0
    });
    setListTitle('')
    setListDescription('')
  };

  const reset = () => {
    setListTitle('')
    setListDescription('')
  }

  return (
    <div class="px-[2.5vw] py-[3vh]">
      <h3 class="text-[3rem] font-semibold">Create New List</h3>
      <div class="h-[1vh]"></div>
      <div class="flex flex-col">
        <div>
          <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
            type='text'
            placeholder='List Title'
            value={listTitle}
            onChange={(e) => setListTitle(e.target.value)}
          />
          <div class="h-[2vh]"></div>
          <input class="text-black w-[50vw] h-[5vh] text-[1.5rem] border-[1.5px] border-black focus:outline-none px-2"
            type='text'
            placeholder='List Description'
            value={listDescription}
            onChange={(e) => setListDescription(e.target.value)}
          />

        </div>
        <div class="h-[2.5vh]"></div>
        <h4 class="text-[2.5rem] font-semibold">Share with</h4>
        <div class="h-[1vh]"></div>
        <div class="flex on_desktop:gap-[1.25vw] on_mobile:gap-[2.5vh] on_mobile:flex-col">
          <button onClick={submitToDB} class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Submit</button>
          <button onclick={reset} class="cursor-pointer w-fit text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]">Reset</button>
        </div>
      </div>
    </div>
  )
}
