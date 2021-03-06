import PropTypes from 'prop-types'
import React, { useState } from "react"

import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import ReactDrawer from 'react-drawer';
import { Link } from "react-router-dom"

// Reactstrap
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import RightSidebar from "../CommonForBoth/RightSidebar"
import megamenuImg from "../../assets/images/megamenu-img.png"

// import images
import github from "../../assets/images/brands/github.png"
import bitbucket from "../../assets/images/brands/bitbucket.png"
import dribbble from "../../assets/images/brands/dribbble.png"
import dropbox from "../../assets/images/brands/dropbox.png"
import mail_chimp from "../../assets/images/brands/mail_chimp.png"
import slack from "../../assets/images/brands/slack.png"

//i18n
import { withTranslation } from "react-i18next"
import { useHistory } from "react-router-dom"
// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions"
import UpdateRatesFromSheetModal from 'components/FormModals/UpdateRatesFromSheetModal';
import EmailEditModal from 'components/FormModals/EmailEditModal';
import PasswordEditModal from 'components/FormModals/PasswordEditModal';

const Header = props => {
  const history = useHistory()
  const [search, setsearch] = useState(false)
  const [megaMenu, setmegaMenu] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  const [position, setPosition] = useState();
  const [open, setOpen] = useState(false);

  
 

 

  return (
    <React.Fragment>
      {
        location.hash === '#ADD_RATE' && <UpdateRatesFromSheetModal 
            isOpen={location.hash === '#ADD_RATE'}
            toggle={()=>history.push(location.pathname+location.search)}
        />
      }
      {
        location.hash === '#UPDATE_OWN_PASSWORD' && <PasswordEditModal 
            isOpen={location.hash === '#UPDATE_OWN_PASSWORD'}
            toggle={()=>history.push(location.pathname+location.search)}
        />
      }
      {
        location.hash === '#UPDATE_OWN_EMAIL' && <EmailEditModal 
            isOpen={location.hash === '#UPDATE_OWN_EMAIL'}
            toggle={()=>history.push(location.pathname+location.search)}
        />
      }
      <header id="page-topbar" className='dark'>
        <div className="navbar-header">
          <div className="d-flex">
            <button
              type="button"
              onClick={() => {
                tToggle()
              }}
              className="btn btn-sm px-3 font-size-16 header-item "
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            {/* <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}
                />
                <span className="bx bx-search-alt" />
              </div>
            </form> */}
          </div>
          <div className="d-flex">
            {/* <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => {
                  setsearch(!search)
                }}
                type="button"
                className="btn header-item noti-icon "
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  search
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}

            {/* <div className="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen()
                }}
                className="btn header-item noti-icon "
                data-toggle="fullscreen"
              >
                <i className="bx bx-fullscreen" />
              </button>
            </div> */}

            {/* <NotificationDropdown /> */}
            <div className='d-flex align-items-center mr-2 ml-2'>
          
        </div>
            <ProfileMenu />

            {/* <div
              onClick={toggleTopDrawer} disabled={open}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div> */}
          </div>
        </div>
      </header>
      {/* <ReactDrawer
        open={open}
        position={position}
        onClose={onDrawerClose}
      >
        <RightSidebar onClose={onDrawerClose} />
      </ReactDrawer> */}
    </React.Fragment>
  )
}


export default Header
