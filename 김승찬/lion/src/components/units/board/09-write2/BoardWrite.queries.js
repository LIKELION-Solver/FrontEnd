import { gql } from "@apollo/client"

//변수의 형식을 꼭 지정해 주어야함
export const MYGRAGH_SETTING = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ 
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`
export const UPDATE_BOARD = gql`
    mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String){ 
        updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

