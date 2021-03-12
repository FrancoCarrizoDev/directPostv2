import { useState } from "react";
import { css } from "@emotion/react";
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners' 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Loading() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return (
        <span className="sweet-loading transition" >
            <BarLoader color={color} loading={loading} css={override} size={150} />
        </span>
    );
}

export default Loading;