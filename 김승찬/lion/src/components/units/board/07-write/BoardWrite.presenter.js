import { RedInput, BlueButton } from './BoardWrite.styles'

export default function BoardWriteUI(props) {
    //presnet는 UI만 담고 로직은 쓰지말자


    return ( //styled props는 @emotion으로 넘어가는 것임
        <div>
            <div>@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@@</div>
            <div>
                작성자: <RedInput type="text" onChange={props.onChangeWriter} />
                제목: <input type="text" onChange={props.onChangeTitle} />
                내용: <input type="text" onChange={props.onChangeContents} />
                <BlueButton
                    onClick={props.onClickSubmit}
                    //mycolor="yellow" 특정 값이 아니라 조건도 가능
                    isActive={props.isActive}
                >GRAPHQL-API요청하기</BlueButton >
            </div>
            <div>@@@@@@@@@@ 여기는 프리젠터입니다 @@@@@@@@@@</div>
        </div>
    )
}