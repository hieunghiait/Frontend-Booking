import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions'
class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changLanguageAppRedux(language)
    }
    render() {
        let language = this.props.language;
        console.log('Check language: ', language)
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class="fas fa-bars"></i>
                            <img className='header-logo' src={logo} />
                            <div className='header-logo'>
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><strong><FormattedMessage id='homeheader.speciality' /></strong></div>
                                <div className='sub-title'><FormattedMessage id='homeheader.searchdoctor' /></div>
                            </div>
                            <div className='child-content'>
                                <div><strong><FormattedMessage id='homeheader.health-facility' /></strong></div>
                                <div className='sub-title'><FormattedMessage id='homeheader.select-room' /></div>
                            </div>
                            <div className='child-content'>
                                <div><strong><FormattedMessage id='homeheader.doctor' /></strong></div>
                                <div className='sub-title'><FormattedMessage id='homeheader.select-doctor' /></div>
                            </div>
                            <div className='child-content'>
                                <div><strong><FormattedMessage id='homeheader.fee' /></strong></div>
                                <div className='sub-title'><FormattedMessage id='homeheader.check-health' /></div>
                            </div>

                        </div>
                        <div className='right-content'>
                            <div className="support"><i className="far fa-question-circle"></i>
                                <FormattedMessage id='homeheader.support' />
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id='banner.title1' /></div>
                        <div className='title2'><FormattedMessage id='banner.title2' /></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Tìm lý do khám' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-child'><FormattedMessage id='banner.child1' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-mobile"></i>
                                </div>
                                <div className='text-child'><FormattedMessage id='banner.child2' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-child'><FormattedMessage id='banner.child3' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-child'><FormattedMessage id='banner.child4' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-child'><FormattedMessage id='banner.child5' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>
                                </div>
                                <div className='text-child'><FormattedMessage id='banner.child6' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
