'use client';
import { IUser } from '@/types/IUser';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Props = {}

export default function page({ }: Props) {
  const [data, setData] = useState<IUser[]>([]);
  const getData = async () => {
    const res = await axios.get<IUser[]>('https://663489df9bb0df2359a1d042.mockapi.io/api/v1/users')
    setData(res.data)
    console.log(res.data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
        <table >
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            {
              data.map((v,i)=> (
                <tr key={v.id}>
                  <td>{i+1}</td>
                  <td>{v.first_name}</td>
                  <td>{v.last_name}</td>
                  <td>{v.phone_number}</td>
                  <td>{v.email}</td>
                  <td>
                    <Link href={`/${v.id}`}>
                      Detail
                    </Link>

                  </td>
                </tr>
              ))
            }
          </thead>
        </table>
    </>
  )
}