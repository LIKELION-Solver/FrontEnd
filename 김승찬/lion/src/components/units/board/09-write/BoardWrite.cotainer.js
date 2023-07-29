import BoardWriteUI from "./BoardWrite.presenter" //하나 밖에 없는 상태 export default로 수출하는 함수 한개만 가져오기 따라서 이름을 바꿔도 됨
//export default는 default 대로 이름 지정해서 받고 export는 {}로 받을 수 있음
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { MYGRAGH_SETTING, UPDATE_BOARD } from './BoardWrite.queries' //export는 골라서 가져오기 기능
import { useRouter } from "next/router"

export default function BoardWrite(props) {
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [나의함수] = useMutation(MYGRAGH_SETTING)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { // variables 이게 $ 역할을 함
                writer: writer,  //첫번째 writer는 $역할 두번쨰 writer는 state임
                title: title,
                contents: contents
            }
        })
        //console.log(result)
        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`) //이 배열은 querie.js 폴더에 있음
    }

    const onClickUpdate = async () => {
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number), //임포트 되는 위치 주소창을 문자열로 가져오기 때문에 Number로 수정
                writer: writer,
                title: title,
                contents: contents
            }
        })
        //console.log(result)
        router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <div>
            {/* <div>$$$$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$$$</div> */}
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
            />
            {/* <div>$$$$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$$$</div> */}
        </div>
    )
}