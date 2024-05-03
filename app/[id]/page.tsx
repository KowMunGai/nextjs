"use client";
import { IUser } from '@/types/IUser';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

function page({}: Props) {
  const param = useParams<{id : string}>();
  const [dataById, setDataById] = useState<IUser | null>(null);

  const getDataById = async () => {
    const response = await axios.get(`https://663489e19bb0df2359a1d04f.mockapi.io/api/v1/users/${param.id}`)
    setDataById(response.data)
  }

  useEffect(() => {
    getDataById()
  }, [])

  return (
    <>
      <div style={{margin: '10px'}}>
        <h2>Detail</h2>
        <label>First name : </label>{dataById?.firstName}<br/>
        <label>Last name : </label>{dataById?.lastName}<br/>
        <label>Phone number : </label>{dataById?.phoneNumber}<br/>
        <label>Email : </label>{dataById?.email}<br/>
      </div>
    </>
  )
}

export default page