
export default function BoardComponent(props) {
    return ( //컴포넌트를 보낼 때 벽을 없앨 수도 있으므로 프레그먼트로 만드는 것은 위험함 -> 덩어리로 만드는 것이 좋음
        <div>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            제목: <input type="text" /><br />
            내용: <input type="text" /><br />
            <button>{props.isEdit ? "수정" : "등록"}하기</button>
        </div>
    )
}



