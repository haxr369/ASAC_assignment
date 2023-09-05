'use-client'
import { useContext } from 'react'
import Buttons from './buttons'
import styles from './module/inputForm.module.css'
import { ModalDispatchContext } from '../context/context'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

interface LoginProps {
  idRef: React.RefObject<HTMLInputElement>
  passwordRef: React.RefObject<HTMLInputElement>
}
interface IForm {
  occupation: string
  id: string
  name: string
  pwd: string
  email: string
  phone: string
}

function LoginForm(props: LoginProps) {
  const { idRef, passwordRef } = props
  //console.log(watch('example')) // watch input value by passing the name of it onChange 같은 것
  const dispatch = useContext(ModalDispatchContext)
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
    getValues,
    setError,
    setFocus,
  } = useForm<IForm>({
    mode: 'onSubmit',
    defaultValues: {
      occupation: 'student',
      id: '',
      name: '',
      pwd: '',
      email: '',
      phone: '',
    },
  })

  const onSubmit = (data: IForm) => {
    if (data.email != 'helloworld@gamil.com') {
      dispatch({ type: 'open', text: '이메일이 맞지 않습니다.', isOpen: true })
      return
    }
    if (data.pwd != '12!@qwQW') {
      dispatch({
        type: 'open',
        text: '비밀번호가 맞지 않습니다.',
        isOpen: true,
      })
      return
    }

    console.log('로그인 성공!')
  }

  return (
    <div>
      <section className={styles.info_wrap}>
        <form
          className="w-screen flex flex-col items-center bg-white "
          onSubmit={handleSubmit(onSubmit)}>
          <p className="text-2xl mb-10 text-center">로그인</p>
          <div className={styles.phone_block}>
            <b>이메일</b>
            <p className={styles.inp_wrap}>
              <input
                type="text"
                className={styles.id_input}
                placeholder="abc@emgil.com"
                {...register('email', {
                  required: true,
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                    message: '이메일 형식에 맞지 않습니다.',
                  },
                })}
              />
              {errors.email && <span>이메일 형식에 맞지 않습니다.</span>}
            </p>
          </div>
          <div className={styles.email_block}>
            <b>비밀번호</b>
            <p className={styles.inp_wrap}>
              <input
                type="password"
                placeholder="12!@asAS"
                className={styles.pwd_input}
                {...register('pwd', {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#$(^)])[A-Za-z\d@$!%*?&#$(^)]{8,}$/,
                    message: '비밀번호 형식에 맞지 않습니다',
                  },
                })}
              />
              {errors.pwd && <span>비밀번호 형식에 맞지 않습니다</span>}
            </p>
          </div>
          <div className="flex w-1/2 m-auto">
            <div className="pt-10 text-center flex-1">
              <StyledButton>로그인</StyledButton>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

const StyledButton = styled.button`
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
  vertical-align: top;
  background: linear-gradient(to bottom, #ff0055 0%, #e62243 100%);
  width: 144px;
  height: 48px;
`

export default LoginForm
