import { ChangeEvent, MouseEvent } from "react"

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any //아직 잘모르기 때문에 있어도 되고 없어도 되는 부분
}

export interface IMyvariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

export interface IBoardWriteUIProps {
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
    isEdit: boolean
    data?: any
    }