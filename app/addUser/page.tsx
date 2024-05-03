"use client";
import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type Props = {}

function page({}: Props) {
  const router = useRouter()
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const  handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const data : IUser = {
      firstName,
      lastName,
      phoneNumber,
      email
    }

    const response = await axios.post("https://663489e19bb0df2359a1d04f.mockapi.io/api/v1/users", data)

    if(response.status === 201){
      alert("Add user success")
      router.push("/")
    }else{
      alert("Add user failed")
    }
  }

  return (
    <>
    <h1>Add user</h1>

    <form>
      <label>First name :  </label>
      <input type="text" name="firstName" required onChange={(e) => {setFirstName(e.target.value)}} value={firstName}/>
      <br />
      <label>Last name : </label>
      <input type="text" name="lastName" required onChange={(e) => {setLastName(e.target.value)}} value={lastName}/>
      <br />
      <label>Phone number : </label>
      <input type="text" name="phoneNumber" required onChange={(e) => {setPhoneNumber(e.target.value)}} value={phoneNumber}/>
      <br />
      <label>Email : </label>
      <input type="text" name="email" required onChange={(e) => {setEmail(e.target.value)}} value={email}/>
      <br />
      <button type='submit' onClick={handleAdd}>Add user</button>
    </form>
    </>
  )
}

export default page