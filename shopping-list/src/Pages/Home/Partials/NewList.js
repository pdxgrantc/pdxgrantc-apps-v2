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

  return (
    <div>
      <input
        type='text'
        placeholder='List Title'
        value={listTitle}
        onChange={(e) => setListTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='List Description'
        value={listDescription}
        onChange={(e) => setListDescription(e.target.value)}
      />

      <button onClick={submitToDB}>Submit</button>
    </div >
  )
}
