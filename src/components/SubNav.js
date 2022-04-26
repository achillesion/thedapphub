/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import bank from "../bank.png";
import { NavLink } from 'react-router-dom'
import "./SubNav.css";

class SubNav extends Component {
    render() {
        return (
            <div className="sub-nav">
                <div className="sub-nav-title">
                <div class="container-box-2" ></div>
                <p style={{paddingLeft:"", fontSize: "16px", fontWeight:"1000", color:"white", lineHeight:"15px", textTransform:"lowercase"}}>The<span style={{color:"#ffd700", fontWeight:"500",marginLeft:"8px"}}> <br></br> D<span style={{textTransform:"uppercase"}}>A</span>PP <br></br> </span>Hub</p>

                </div>
                <div className="sub-nav-search">
                    <form>
                        <label>
                            <input type="text" name="name" placeholder="Search token by name or address for analysis" className="token-input" />
                        </label>
                    </form>

                </div>
                <div className="sub-nav-content">
                <button class="premium"> Please connect your wallet </button>
                </div>

            </div>
        );
    }
}

export default SubNav;
