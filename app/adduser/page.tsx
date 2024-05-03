'use client'
import { IUser } from '@/types/IUser'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

type Props = {}

export default function page({}: Props) {
    const router = useRouter()
    const [first_name, setFirstname] = useState<string>("")
    const [last_name, setLastname] = useState<string>("")
    const [phone_number, setPhoneNumber] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const hendleAdd = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const data : IUser = {
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            email: email
        }
        const res = await axios.post('https://663489df9bb0df2359a1d042.mockapi.io/api/v1/users', data)
        if(res.status == 201){
            alert("Add user success")
            router.push("/")
        } else {
            alert("Add user failed")
        }
    }
    return (
    <>
        <form >
        <label >
            Firstname:
        </label>
        <input type="text" name='first_name' required onChange={(e)=>{setFirstname(e.target.value)}} value={first_name} />
        <br />
        <label >
            Lastname:
        </label>
        <input type="text" name='last_name' required onChange={(e)=>{setLastname(e.target.value)}} value={last_name} />
        <br />
        <label >
            phoneNumber:
        </label>
        <input type="text" name='phone_number' required onChange={(e)=>{setPhoneNumber(e.target.value)}} value={phone_number} />
        <br />
        <label >
            Email:
        </label>
        <input type="email" name='email' required onChange={(e)=>{setEmail(e.target.value)}} value={email} />
        <br />
        <button type='submit' onClick={hendleAdd}>Add</button>
        </form>
    </>
)
}