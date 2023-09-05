"use client";

import { useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import Welcome from "@auth/components/welcome";
import styles from "@auth/components/module/page.module.css";
import Buttons from "@auth/components/buttons";
import JoinForm from "@auth/components/joinForm";
import { handleItemCheck } from "@auth/utils/handleItemCheck";
import { ModalDispatchContext } from "../context/context";
import axios from "axios";

function JoinPage() {
  const idRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handelLogin = () => {
    // join 페이지로 이동
    router.push("/auth/login");
  };
  const dispatch = useContext(ModalDispatchContext);

  function handleOpen(text: string) {
    dispatch({
      type: "open",
      text: text,
      isOpen: true,
    });
  }

  const postIdAndPassword = ({
    id,
    pwd,
  }: {
    id: string | undefined;
    pwd: string | undefined;
  }) => {
    axios
      .post("http://127.0.0.1:3000/auth/join/api", {
        id: id,
        pwd: pwd,
      })
      .then(function (res) {
        console.log("성공!" + id, pwd);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const handelJoin = async () => {
    const check = handleItemCheck({
      id: idRef,
      pwd: passwordRef,
      handleOpen: handleOpen,
    });
    if (check) {
      console.log("환영합니다! 회원가입 성공!");
    } else {
      console.log("회원가입 실패!");
    }
    console.log(idRef?.current?.value);

    postIdAndPassword({
      id: idRef?.current?.value,
      pwd: passwordRef?.current?.value,
    });
  };

  return (
    <div className="w-full h-screen bg-[#ffffff] pt-20" id="rootLogin">
      <div className={styles.align_rt}>
        <div className={styles.inqury}>
          <Welcome />
          <form>
            <JoinForm idRef={idRef} passwordRef={passwordRef} />
            <Buttons
              loginText="로그인하러 가기"
              jointext="회원가입"
              onJoinClick={handelJoin}
              onLoginClick={handelLogin}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default JoinPage;
