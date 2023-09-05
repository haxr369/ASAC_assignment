'use client'
import React, { useState, useCallback } from 'react'
import { LightMemo } from './light'
import { ABCMemo } from './abc'

function SmartHome() {
  const [masterOn, setMasterOn] = useState(false)
  const [kitchenOn, setKitchenOn] = useState(false)
  const [bathOn, setBathOn] = useState(false)
  const [text, setText] = useState('dfsd')

  const toggleMaster = useCallback(() => {
    setMasterOn(!masterOn)
  }, [masterOn])
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn), [kitchenOn])
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn])

  console.log({ masterOn, kitchenOn, bathOn })

  /**
   * 한 컴포넌트의 state만 바꿔도 부모가 리랜더 -> 자식도 리랜더
   * 그럼 React.memo로 컴포넌트를 저장할까? -> props가 변하지 않으면 리랜더 안되겠네?
   * -> SmartHome이 리랜더될 때마다 toggleMaster등 함수가 재생성되면서 메모리 주소 바뀜
   * -> 함수를 props로하는 컴포넌트 리랜더 발생
   *
   * 그래서 함수 자체를 useCallback으로 저장하자는 것이다.
   * React.memo로 감싼 컴포넌트는 props만 바뀌지 않으면 리랜더가 되지 않는다.
   * 다만, 함수가 리랜더되는 것을 막기위해 useCallback을 감싸서 함수를 저장한다.
   */

  return (
    <>
      <ABCMemo text={text} />
      <LightMemo room="침실" on={masterOn} toggle={toggleMaster} />
      <LightMemo room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <LightMemo room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  )
}

export default SmartHome
