import { css } from '@emotion/react';

export const globalStyles = css`
    *{ // 모든 스타일에 대해서 적용
        margin: 0;
        box-sizing: border-box;
        font-size: 20px;
        font-family: "myfont";
    }

    @font-face {
        font-family: "myfont"; // 이 뒤에 폰트 요소를 추가하여 순위를 줄 수 있음
        src: url("/fonts/scifibit.ttf");
    }

`;
