import React from 'react';

import {
    Card
} from 'reactstrap';
import { useHistory } from "react-router-dom";

import "./Option.module.css";


const Option = ({ name, ImageOption ,navigation}) => {
    let history = useHistory();
    const onClick=()=>history.push(navigation);

    return <Card className="Options" onClick={()=>onClick()}>
        <div className="profile-pic mb-1 mt-1">
            <div style={{
                flexDirection: "column",
                display: 'flex',
                flex: 1,
                alignItems: "center"
            }}>
                <div style={{ width: 140, padding: 17,height:180,    marginBottom: -32 }}>
                    <ImageOption />
                </div>
                <h1 className="mt-3 mb-0">{name}</h1>
            </div>
        </div>
    </Card>
}


export default Option;
