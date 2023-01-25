import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';

const useAbout = makeStyles({
    background: {
        backgroundImage: `radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(79,82,10,1) 100%);`,
        width: '100%',
        height: '92%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
});

export const About = () => {
    const classes = useAbout();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h3>{"We want to provide you with the best mobile experience so you can read any books you'd like from anywhere!"}</h3>
            </div>
            </div>
        </>
    )
}