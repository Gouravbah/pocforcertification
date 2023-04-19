import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { GetAction } from '../redux/action/action';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAction()).then((res) => {
            if (res) {
                console.log("test", res.data)
            } else {
                console.log("error")
            }
        });
    });
    return (
        <div className='footer'>
            test
        </div>
    )
}

export default Home