import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import PersonIco from '../../../media/img/outline-person.svg'


const ContentView = ({
    langMenu,
    showLangSelection,
    onLangSelect
}) => (
<div className="hrx-content-root">
    <div>
        <a className="freeda-trigger freeda-trigger-message" >
            <PersonIco fill="#ffffff" width="32" height="32" />
        </a>
    </div>

    <div>
        <Menu
            id="lang-menu"
            anchorEl={langMenu}
            open={showLangSelection}
            onClose={onLangSelect}


        >
            <MenuItem onClick={onLangSelect('en')}  style={ {minWidth: "140px"} }>English</MenuItem>
            <MenuItem onClick={onLangSelect('es')}>Español</MenuItem>
            <MenuItem onClick={onLangSelect('fn')}>Francés</MenuItem>
        </Menu>
                </div>

</div>
)
export default ContentView
