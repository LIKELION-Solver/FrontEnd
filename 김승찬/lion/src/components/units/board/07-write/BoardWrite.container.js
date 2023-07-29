import BoardWriteUI from "./BoardWrite.presenter" //하나 밖에 없는 상태 export default로 수출하는 함수 한개만 가져오기 따라서 이름을 바꿔도 됨
//export default는 default 대로 이름 지정해서 받고 export는 {}로 받을 수 있음
import { useMutation } from "@apollo/client"
import { useState } from "react"
import { myset } from './BoardWrite.queries' //export는 골라서 가져오기 기능

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false)

    const [나의함수] = useMutation(myset) //axios.get("https://koreanjson.com/posts/1")와 똑같은 코드

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { // variables 이게 $ 역할을 함
                writer: writer,  //첫번째 writer는 $역할 두번쨰 writer는 state임
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)

        if (event.target.value && title && contents) {// writer로 하면 버퍼에 들어가기 때문에 실시간 값인 event.target.value를 사용
            setIsActive(true)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)

        // if (writer && title && contents) {
        if (writer && event.target.value && contents) {
            setIsActive(true)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)

        if (writer && title && event.target.value) {
            setIsActive(true)
        }
    }

    return (
        <div>
            <div>$$$$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$$$</div>
            <BoardWriteUI
                onClickSubmit={onClickSubmit} //보통 key:value를 동일한 이름으로 설정하면 편함
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isActive={isActive}
            />
            <div>$$$$$$$$$$$ 여기는 컨테이너입니다 $$$$$$$$$$$</div>
        </div>
    )

    // props = {
    //     aaa:onClickSubmit
    //     bbb:onChangeWriter
    //     ccc:onChangeTitle
    //     ddd:onChangeContents
    // }
}