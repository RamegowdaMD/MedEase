import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shop_context'
import axios from 'axios'
import { toast } from 'react-toastify'

const UpdateProfile = () => {
  const { token, backendUrl, navigate } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(
        `${backendUrl}/api/user/update`,
        { name, email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (res.data.success) {
        toast.success('Profile updated successfully!')
        setName('')
        setEmail('')
        setPassword('')
        navigate('/')
      } else {
        toast.error(res.data.message)
      }
    } catch (err) {
      console.error(err)
      toast.error('Failed to update profile')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4 items-center text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>Update Profile</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type='text'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='New Name'
      />

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type='email'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='New Email'
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type='password'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='New Password (optional)'
      />

      <button className='bg-blue-500 text-white font-light px-8 py-2 mt-4'>
        Update
      </button>
    </form>
  )
}

export default UpdateProfile
