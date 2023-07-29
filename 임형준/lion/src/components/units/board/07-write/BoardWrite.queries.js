import { gql } from "@apollo/client"

//변수의 형식을 꼭 지정해 주어야함
export const myset = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ 
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`