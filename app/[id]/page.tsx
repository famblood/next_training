'use client'
import { IUser } from '@/types/IUser'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({ }: Props) {
    const param = useParams<{ id: string }>()
    const [dataById, setDataById] = useState<IUser | null>(null)
    const getdataById = async () => {
        const res = await axios.get(`https://663489df9bb0df2359a1d042.mockapi.io/api/v1/users/${param.id}`)
        setDataById(res.data)
    }
    useEffect(() => {
        getdataById()
    }, [])

    return (
        <div style={{margin: '10px'}}>
            <h2>
                Details
            </h2>
            <label >Firstname: </label>{dataById?.first_name} <br />
            <label >Lastname: </label>{dataById?.last_name} <br />
            <label >Phone number: </label>{dataById?.phone_number} <br />
            <label >Email: </label>{dataById?.email} <br />

        </div>
    )
}