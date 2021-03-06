import React, { Fragment, useState } from 'react'
import { RiAccountCircleLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SidebarMenu from './sidebarasset/SidebarMenu'
import SidebarSupport from './sidebarasset/SidebarSupport'
import { BiXCircle } from 'react-icons/bi'
import { AiOutlineLeft } from 'react-icons/ai'

import Poppins from '../../font/Poppins/Poppins-Black.ttf'
import { useEffect } from 'react';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const handleClickSidebar = () => {
        setSidebar(!sidebar)
    }

    useEffect(() => {
        if (!sidebar) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'unset'
        }
    })

    const { user } = useSelector(state => state.auth)

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins,',
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                @font-face {
                font-family: 'Poppins';
                src: local('Poppins'), local('Raleway-Black'), url(${Poppins}) format('ttf');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
                }
            `,
            },
        },
    });


    return (
        <Fragment>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <div className="open-sidebar" onClick={handleClickSidebar}>
                    <AiOutlineLeft />
                </div>
                <div className="cross" onClick={handleClickSidebar}>
                    <BiXCircle />
                </div>
                <div className="userpicture">
                    <RiAccountCircleLine />
                    <p>{user.namapengguna}</p>
                    <b>Role: {user.role}</b>
                </div>
                <ThemeProvider theme={theme}>
                    <SidebarMenu />
                    <SidebarSupport />
                </ThemeProvider>
            </div>
        </Fragment >
    )
}

export default Sidebar
