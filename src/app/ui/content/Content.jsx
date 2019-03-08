import React, { Component } from 'react'
import ContentView from './ContentView'

import {connect} from 'react-redux'
import {setLanguage} from 'redux-polyglot';


import './content.scss'
import { HeaderAction } from '../header/HeaderAction';

import enPhraces from '../../i18n/en'
import fnPhraces from '../../i18n/fn'
import esPhraces from '../../i18n/es'

class Content extends Component {

    lang = {
        en : enPhraces ,
        fn: fnPhraces ,
        es: esPhraces
    }

    constructor(props) {
        super(props)

        this.dispatch = this.props.dispatch
    }

    onLangSelect = (locale) => () => {
        const action = HeaderAction.Create(HeaderAction.HIDE_LANG_SELECTION)
        this.dispatch(action)
        this.dispatch(setLanguage( locale, this.lang[locale]))
    }


    render() {
        return <ContentView
            {...this.props}
            onLangSelect = {this.onLangSelect}
         />
    }
}

const stateToProps = state => {
    return {
        showLangSelection: state.header.showLangSelection,
        langMenu: state.header.langMenu
    }
}

export default connect(stateToProps, null) (Content)
