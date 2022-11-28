import React, { FC } from 'react'
import './AppHeader.css'


const AppHeader: FC = () => {
    return (
        <header className='app-header'>
            <img className='app-header-logo' src='/images/logo.png' />
        </header>
    )
}

export default AppHeader