'use client'

import { useContext, useEffect, useReducer, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Welcome from '@auth/components/welcome'
import styles from '@auth/components/module/page.module.css'
import Buttons from '@auth/components/buttons'
import LoginForm from '@auth/components/loginForm'
import { handleItemCheck } from '@auth/utils/handleItemCheck'
import { ModalDispatchContext } from '../context/context'
import LoginForm3 from '@auth/components/loginForm3'

function LoginPage() {
  const router = useRouter()
  const idRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const dispatch = useContext(ModalDispatchContext)
  const handelJoin = () => {
    // join 페이지로 이동
    router.push('/auth/join')
  }

  function handleOpen(text: string) {
    dispatch({
      type: 'open',
      text: text,
      isOpen: true,
    })
  }

  const handelLogin = () => {
    const check = handleItemCheck({
      id: idRef,
      pwd: passwordRef,
      handleOpen: handleOpen,
    })
    if (check) {
      console.log('환영합니다! 로그인 성공!')
    } else {
      console.log('로그인 실패!')
    }
  }

  return (
    <div className="w-full h-screen bg-[#ffffff] pt-20" id="rootLogin">
      <div className={styles.align_rt}>
        <div className={styles.inqury}>
          <Welcome />
          <LoginForm idRef={idRef} passwordRef={passwordRef} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
