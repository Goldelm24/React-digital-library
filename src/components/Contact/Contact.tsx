import React from 'react';
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';

const useContact = makeStyles({
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

export const Contact = () => {
    const classes = useContact();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h3>{"Please do not hesitate to contact us!"}</h3>
            </div>
            </div>
        </>
    )
}