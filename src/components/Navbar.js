/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import bank from "../bank.png";
import { NavLink } from 'react-router-dom'
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar narbar-dark fixed-top shadow p-0"
        style={{ backgroundColor: "black", height: "70px" }}
      >
        <div
          className=""
          style={{ color: "white", fontSize: "2.25rem" }} href="./">
           
           <div class="container-box" ></div>
           
           <p style={{paddingLeft:"70px",marginTop:"-10px", fontWeight:"1000"}}>The<span style={{color:"#ffd700", fontWeight:"500",marginLeft:"8px"}}>Dapp</span>Hub</p>
        </div>
        <div class="dropdown">
  <button class="dropbtn">
  <svg viewBox="0 0 24 24"><path d="M10 19v-5h4v5c0 .6.5 1 1 1h3c.6 0 1-.5 1-1v-7h1.7c.5 0 .7-.6.3-.9l-8.3-7.5a1 1 0 0 0-1.4 0L3 11.1c-.4.3-.2.9.3.9H5v7c0 .6.5 1 1 1h3c.6 0 1-.5 1-1z"></path></svg>
    <span>Roi Dapps</span>
  </button>
    <div class="dropdown-content">
    <NavLink to="/miners">
      <svg viewBox="-30 -50 600 600" ><path  d="M250.5 5.3 128 62.9c-93.5 44-120.2 57-122.7 59.6a18 18 0 0 0-4.7 14.8c.9 4.5 7.2 20.7 9 23.5 2.4 3.6 7.4 6.2 12.3 6.2 5.2 0-6.3 5.2 127.6-58C205.6 82.4 252.6 60.3 254 59.8c2.2-.9 17.2 6 116 52.7 120.6 57.1 119.8 56.7 126.6 53.2 4.6-2.4 6.2-4.7 10.3-15.3 4.9-12.7 5.5-15.3 4.1-20.4-2.3-8.5-1.9-8.3-85-47.3L304.8 25.6a727.7 727.7 0 0 0-47.5-21.1 15 15 0 0 0-6.8.8z"></path><path d="m160.5 132-95 31.8h381l-94-31.4-95.5-31.8c-.8-.2-44.2 13.9-96.5 31.4zM64.5 185.2c1.4 11.4 4.9 18 11.5 21.7l4 2.2v189.1l2.9 2.9 2.9 2.9h52.4l2.9-2.9 2.9-2.9V209.1l4-2.2c6.6-3.7 10.1-10.3 11.5-21.7l.7-5.2H63.8l.7 5.2zM208.5 185.6c1.4 11.1 4.9 17.6 11.6 21.3l3.9 2.2v189.1l2.9 2.9 2.9 2.9h52.4l2.9-2.9 2.9-2.9V209.1l4-2.2c6.6-3.7 10.1-10.3 11.5-21.7l.7-5.2h-96.4l.7 5.6zM352.5 185.6c1.4 11.1 4.9 17.6 11.6 21.3l3.9 2.2v189.1l2.9 2.9 2.9 2.9h52.4l2.9-2.9 2.9-2.9V209.1l4-2.2c6.6-3.7 10.1-10.3 11.5-21.7l.7-5.2h-96.4l.7 5.6zM50.9 422.9c-2.8 2.9-2.9 3.2-2.9 13.1 0 9.9.1 10.2 2.9 13.1l2.9 2.9h404.4l2.9-2.9c2.8-2.9 2.9-3.2 2.9-13.1 0-9.9-.1-10.2-2.9-13.1l-2.9-2.9H53.8l-2.9 2.9zM2.9 470.9C.1 473.8 0 474.1 0 484c0 9.9.1 10.2 2.9 13.1l2.9 2.9h500.4l2.9-2.9c2.8-2.9 2.9-3.2 2.9-13.1 0-9.9-.1-10.2-2.9-13.1l-2.9-2.9H5.8l-2.9 2.9z"></path></svg>
      <label>Miners</label>
    </NavLink>
    
    <NavLink to="/farms">
    <svg viewBox="0 0 24 24"><path d="M19 5h-2V4c0-.6-.5-1-1-1H8a1 1 0 0 0-1 1v1H5a2 2 0 0 0-2 2v1a5 5 0 0 0 4.4 5 5 5 0 0 0 3.6 2.9V19H8a1 1 0 0 0-1 1c0 .6.5 1 1 1h8c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-3v-3.1a5 5 0 0 0 3.6-3A5 5 0 0 0 21 8V7a2 2 0 0 0-2-2zM5 8V7h2v3.8A3 3 0 0 1 5 8zm14 0a3 3 0 0 1-2 2.8V7h2v1z"></path></svg>
      <label>Farms</label>
    </NavLink>
    <NavLink to="/nodes">
    <svg viewBox="0 0 24 24"><path d="M19 5h-2V4c0-.6-.5-1-1-1H8a1 1 0 0 0-1 1v1H5a2 2 0 0 0-2 2v1a5 5 0 0 0 4.4 5 5 5 0 0 0 3.6 2.9V19H8a1 1 0 0 0-1 1c0 .6.5 1 1 1h8c.6 0 1-.5 1-1 0-.6-.5-1-1-1h-3v-3.1a5 5 0 0 0 3.6-3A5 5 0 0 0 21 8V7a2 2 0 0 0-2-2zM5 8V7h2v3.8A3 3 0 0 1 5 8zm14 0a3 3 0 0 1-2 2.8V7h2v1z"></path></svg>
     <label> Nodes</label>
    </NavLink>
    <NavLink to="/dao">
    <svg viewBox="0 0 24 24"><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zM4.74 9H5c0 2.21 1.79 4 4 4s4-1.79 4-4h.26c.27 0 .49-.22.49-.49v-.02a.49.49 0 0 0-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26a.49.49 0 0 0-.49.49v.03c0 .26.22.48.49.48zM11 9c0 1.1-.9 2-2 2s-2-.9-2-2h4zM21.98 6.23l.93-.83-.75-1.3-1.19.39c-.14-.11-.3-.2-.47-.27L20.25 3h-1.5l-.25 1.22c-.17.07-.33.16-.48.27l-1.18-.39-.75 1.3.93.83c-.02.17-.02.35 0 .52l-.93.85.75 1.3 1.2-.38c.13.1.28.18.43.25l.28 1.23h1.5l.27-1.22c.16-.07.3-.15.44-.25l1.19.38.75-1.3-.93-.85c.03-.19.02-.36.01-.53zM19.5 7.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM19.4 10.79l-.85.28c-.1-.08-.21-.14-.33-.19l-.18-.88h-1.07l-.18.87c-.12.05-.24.12-.34.19l-.84-.28-.54.93.66.59c-.01.13-.01.25 0 .37l-.66.61.54.93.86-.27c.1.07.2.13.31.18l.18.88h1.07l.19-.87c.11-.05.22-.11.32-.18l.85.27.54-.93-.66-.61c.01-.13.01-.25 0-.37l.66-.59-.53-.93zm-1.9 2.6c-.49 0-.89-.4-.89-.89s.4-.89.89-.89.89.4.89.89-.4.89-.89.89z"></path></svg>
      <label>Dao</label>
    </NavLink>
  </div>
  </div>
  <NavLink to="/memecoins">
  <button class="dropbtn">
  <svg viewBox="0 0 500 500" style={{enableBackground:"new 0 0 455 455"}}>
<path d="M227.5,0C101.855,0,0,101.855,0,227.5S101.855,455,227.5,455S455,353.145,455,227.5S353.145,0,227.5,0z M303.514,146.486
	c19.33,0,35,15.67,35,35s-15.67,35-35,35c-19.33,0-35-15.67-35-35S284.184,146.486,303.514,146.486z M151.486,146.486
	c19.33,0,35,15.67,35,35s-15.67,35-35,35c-19.33,0-35-15.67-35-35S132.156,146.486,151.486,146.486z M227.5,370
	c-59.42,0-113.171-37.504-133.752-93.325l28.148-10.378C138.15,310.381,180.589,340,227.5,340s89.35-29.619,105.604-73.703
	l28.148,10.378C340.671,332.496,286.92,370,227.5,370z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>


    <span>MemeCoins</span>
  </button>

    
  </NavLink>

  
  <NavLink to="/nft">
  <button class="dropbtn"/>
        <img style={{width:"32px",height:"32px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAASzElEQVR4nO2be3xcVbXHv2vPTJM2nXMmaRGpladAeV6FQktn0jb10YoK5WWFIg8vCpfCRbxeBR9XFFD88NLLS/QDKE9beSkiIhfSJjNpe1soYFu5VKRFSHk0yZwzTZNmZva6f8xMciaZmaSFq39cf59PPz1Ze++111pnnb32XnsN/AP/vyF/i0lUMX7KOVaRecDRgh4MMgWYCEQqDMkC20E7BXnJwrOi+oyT8NeIYN9L2WoawE82NgM4iZ723WHetappaiSXX2Lh8wIf2B0eQYjyOsI9YRO+ZcKsrjfeLT8YzQAp93YUdRLeBbvC1F8dnaRZcxXwBWDcuxEwgAwQLT7vRLgD0W+7s/zud8O0qgH8tmhcjVkOIMbOcWZlOsbC0Es5n0PlZmDSuxFsJGQrwh2oHgicBhhgm8KSWMJbtttcKxELyod+BbpXgaKdYvS0WkbQVsJ+xL0JqOYtvcDjiKYQVuVMuLPJTuhi5+vaS0MsHw7to0aOEmUu8GlgQqVpQH+Ut6Gfh8TegPDRohq3ONn0l6WF3FgVL6HMAJlUbLaii1X5AhAe1jcncAeY+4avCdoxdbyv25eh+ukKc/xF4dp8OHT/pJnd/liEevPJPRvqG/rPFLgM2LeC1A84dd7Z3k73PFFuBOpAH3OMs0hmvd43ljlKKFNSVRRUq/RVBR3uMtpKuJLyCn3AVW7Wu0Fa6FfFeO3ODJDPqCEhyt7AVKAfSCu8KshyQf4rGn8rKcLtmbbYS9bo8pGScLrf74bcrLc4E4q+qMY8AvIZ3/pLtZWTd8UTKn8CqehxqvJgMVSh8Iagp7oJf9Xwvl7SvY2Rbr9FLSfHZnvPqWL8pLMIkSuAg8Yo1AuKXgtyCXDMWJUpjr7ZTaQvHnPvag1+R3SWWrOCwnc3u6LyhQXvgSBNYb3J2hanJbMtvcLdT0IsZZeVeHdQ4bRY3HtwLH1NtQZnVqZDhDuBOyop76+OTiqu9kH8JUJkvtOS2ea1OwskxLNUVV5/bQgdbggdDvrrMciaRXUJ8Now+jZVmtyEJ6AXA4hya7rdbRwDz+oGKMho7hXM/RWbCnE+GOoGrMrJDYltnZlUbDYijwCVhFhrrMx1E/7CaKJ7QzTRvcFN+AuNlbnA2hrCXOU2+7eqcnJxfSlhsiBXADhx/xaBVmAPEfleTd2K2K2tcNeqpqnhXP4VApschW/EEt4P/GT0YMWsZKTyW0C/6cT9+0VQvzU6WSOh7wBINv9dpyWzTRXxU84ZIFcD+wwb321DcnTjcenNXrvzLUSuDLTtDNvsfg2zd2ztbms8MmTsOiAbJrJ/Q2JbZy1dantAFURy+SWU7/C2uPXedaqIxfx0mPKeKpc5WW+am/DvYzl16Xb36xoxfwa9CPQijZg/p9vdr7OcOjfh3+dkvWmqXAZ4AT5NJq+/VMU4Of864NVAW10uNO5CgKbZPS+K8jBQlye7ZDRdanpA16omJyLZiDMj01Wi6TJC3hR3S9neXvUit9m/xWt3Po/I3UVqFuSnks1fEXi7p4N8n5Fvt4QtoN9w4v4DAS+5AvRLFA9NCotiCW+Z1+5ciMgto+j3mhP39qt1gKrpAeGsXahZ87bX7lxfovlTnGOGHWx29I6feFfhUS4vEcXaFjeRvshpyWzLpGKz/ZS7GuS+ovI50LvF2EOMmCOAp4rD9gG5z0+5qzOp2GynJbPNTaQvEsy8Qb7KFapILhK+l8Lushb29lc602t1qP0JCB8CEJE3S6TikTYAfWrK9M4dXodzLMIhJaozO5MCSKfcR6zqCgrRIAd6N3k91E34ZzuzMi9F4z3r3YT3CRVOA/5aHH6MVV2RTrmPADiJnmRApkO8pHvUpJndvsDvyySBy92EJ4WIwE8ANC8tu20AN5H+D8dEJ+7orb81QD66fFJ5AkCtnFqJhygLA71Xugn/bHeOv8lb4RzoJZ1f+Cn3mjef3LMhFvce7OutP0TgGmBg5NgATzgJQEXbypTRgGyqHUUFa3rA8P1+GTrXTpkg01/fUT65HhxcOgxmQ1Gof6rFqzi62U/FzlW1c0EWAyFVmDChf3G63f1KrPmtXwGX+23R36oxyepsmAGA8t9BshUOLj0rslGG0Sqhpgc09Pe+kU66O7pWNTmB2fcqYxAe2FSc8vBavAYFU70T5CwgNEgTpoqwzEu6T8HQ51MD+wPkCZWFOIFB2UIm/9fhtEqo6QFAg0CkKdwd3HhMLOtgG/3CWiQO7x4fG0snLSrVaBre8W0m2DTZS7oKYIeOdFFqYLR9QB6AzNDbonrorHaKfM8hhRMkPeN6x5JtqinXaAbwAHppiAVoZaFnu6aLFtayV/F/jO0Adf2hhmH0baUoYCS/Z5HmUQOjGSANYOtMwABaloxUjRSPuLJ+FF5jgpd0teTGVaFsBMiTPyBIFhhcE/I29MFCV96pxaqmAQTeAFCVwYlUZFOwj8UeVujD8zWFfi8hsrogS/4jZXTl5cEuyGEAotR8MTUNYIV1hQeGJlJWlwvDgsJ/+nAlHio8WmuOWqg+1hb2HipzyqjB06TocQBiqJmGq+0BqusAiwwde4XyFJUoH+9cO2WC2+yvBtlYovvJxgRALO6dZETmAGtqzTUMa4zInFjcOynIq4jn3YS/qmtVkyNwfJkswjWBT+gCAFW+5CXd27S1csSraYABxv1GIvZ9bsK/tERz4v5qUV4PdGto6Nt+DgDKD0tExT7jJWM3+63RydF4us2JezNAFwNbaky5BXSxE/dmROPpNr81OtlLxm5W7DODPVRvAAjl8qcD9bXkD+ACL+IurWSEMecDdC0Rr89dKCJng86nfA+x2an3DuJocn7KWQHSHGjzVPmBm/N+LC30ayv1Xti9RITLAXcX+iCwPBr35rGcOj/ivgx8cEgTucqNp78N4Le7v1KhwtZ8ZL5wVAOoIn6HsxiV70DhcFSxn/CtWNy72u+ITlNrOnjvEyKeqD3Wac68nE66lwt8P9C2M5TN7TuxpffNYkLkeWBAYZNA+Q5V9NNu3H98TAboWRnbN5TXOxVqnqiKGLAqxzY2p1/wk43Niv0DlV10rbHy1ejs9IogMdMWm2ONXkeFw4tCX0hkQTSebvNSzjGoJAkmZER/7Mb9L6simZT7tEILoj+WsF5ps6ZV4IgAu5edrHdYKXVe1QA9yViLQR8h4IJBFFLXfBBoCpA3R0w4MX5c19t+v9sGzKzGv5AUDX8TwJK7GuTEKh27VTg9Fvf+0Ns2Ya+ciSQpngWKeMdm5aDGlnTaSzoXgdxUsIn8s9OcvjPTNvFQa0LPAXWDsls5yZmdfrSqAfxk7ARFlwUHFdEL+jPy3OrO8Tf57bGTVIaHP90gKn+q/A3uMlZbkUWN8fSW7a0N789Hwq3AtDGO3WnETI/Ge9Z7KfcWlAuHmuQ+N5E+EypEgZ5U7MOK3s9w5ZVfhsK5A9yEf6k7x9/Um5w8BdEmRuy05LCRyuvdAi+MUXBANioscuLerMZ4eouXco7JR8KrGLvyAHV5td8FEOy9w+SZUXoqCwtvt+4x0ejAr4HgHjsrIuc7ifRdAIVvkG/lyH4Kyg5J1fBnp94/T6aTLV66zgc9TuEQKVyAjgc6BTarslKFR914+lkRVDumjk+nMl9B+TYjvXGpk/XOzEQaZyr2YWCP4RMLzAPID4T+ZCJDu2sNpPTKDFAXyX4N2DtAsqKyyEmkH+lcO2XCxL7eH6lyXoE3aZDfivC0VV0PXC5wcgUD1Hk73fM61zb8wpnemQJGO+vT0xqLee32DN9mLpNgqBvC/U69d46vzvlgr2ekcUoYAAiRD2vA2aVg9NJzAcWihtcou5bW77gJ/3s9rbGYiegfKOT1tqF6Re/4iXdNmd45mC0q3gFei8hXqgjTK/B7KzxtsM+bAftqA73prdEppq63f1IknJ2qNnSsoAkrfCooZACK6o3WmHtCqjeMITotcxPeomJUKkufFfOGAQ8YCJ2IaPBO/lXH939YCC36kBavuATWRxP+bQ4+Pe2xuQZOQjjaT+mBSOWIUUSDwiminKIY8hGDj0tDfy+EQNWAKEq10CRbUb1TkION6rM6yi62EDrNlQAWe1a1cDdoABV7QnBqhZ/K8ews5PqZF6DPzXS4t1nlOCN6BH8zaBThm2PMugwYlcXRRM96vz16kMJZ1ToG1gApW2HDxhR2S8IXi+0bQacBRpUv/U3Ky8oxcfQugLAJdLGT8NZ4HU6TWnmMGnVKQTeaEmzos6HNRY5HAoTC2XlWZH+gLEu8i7CiPCjw4rvgUQWyUeA8p847zI37a7wO50Ni5RlGqUkIRoGy5GG+N1S6ThoAsH0m39iS3uIl3S4q1++MLqLS6TR7pxUX1Z5afY3NH5YPheYINKMcQuEmehKFl+YpvCPKehGeE0K/iya6N0CxYiXpnqeW6xXKErWq3CXCucHb5apZ4XHjBw4AXhT4o8I8HScfA36pwqWiLGVse4Agcmr0AgCJ6CdG6xydvX0jsBG4bSzM/dboZBsxp/rwVeCA4e0CD6lyM8K5pUwX1DBAOGQXAC+icjOi81C5Mt3uPhmLew/1tMc+JqI3jThpVYHAC4j9FyeeWdm9ttGVnfYqtHC8VUhUksNPuq3AKkRWCfJKSEzPeMZ3l6rKbJ2J5W3oUAMfLm6s5kpVfeSmaGf6Um+K+7WiQIPJmcG1rEIi8lXH9w7JONF9LWZdMS6vipjwqRNmdb2hiqRTsbkGewKYY0APpHBwGjp0KK8TsotK5XXFkpkHgBnAU07cm7891XSoJf8c711B5Qi4CU90LRG/310PHGSRUxoT6Yeh9sXIfr4Tewh0bmBTMjNrcy94ydjVW5+dcPuURGcrhYqMQWgr9X7E7QNQYbKDuy7dbhpF5BzQ71JYa9bm681pIqifzC/mvVd+u8JPpPA5AJDpdy+hsCC+Esumf1Oi1/KA0eAjPC7KMxaeD4dzf23o6/WkhX4v6fZRzAUU3Xxm8W8V4WdRiX5ZZr3e5yWdM0DuYTcLNSpgnYjcSzj/C2dGpqukk2CaFfsUUC9qTnCaex4rDahkgC1UL2DYqcJilDMETmTsC2FOhd8K+n037q8B8FLOxahcT3m1+GZKhZGqZyEcJciRquyFsBdQup/wEd7C8hoiL4EugaHtbQWduoBJILe4ifRFwT5BA/QB9RaZJ+jjFffiKv/pNqcvAci0TdxDTegEq8RFOJJC0aNb5OlTSIFtEDErzED2iYktvW8C9KRi+4jqjaUr7kHW0KcqxxvRVqDXTXgjNj4lhaopWsMACDwUzXqfG15EGVwDOoH91UpXyPA5RZcyLKWlol/0krGQkL8pmsj8D3BH8d+oyKQaD7dqL1TVcyoYt9+oWZRncG+wdSw8q6GnI/aRkNXrAt/0bdGs96+VKkiDBlgD7G/EftJJeD/sScaON+gzwc4FwXWJYpakk+564AkRfS4koQ2Ygbcb+no9+tDt7kQ3Z8N7GeyhCMeAfNKqnVbkMQIWOb6xuac1nXSLJTYyoi5xLPBTsRNV9XyszlcwWoj3/xZLeEurjRmUJ93unibCMuAlJ+sdIS3kdmNh3C0MD1MUfhuQQjWFYV1IQq/ZnbmtGjHvAKjSZEJ2T7Wyn4gcoYH7iCJ2IHJD3/a6a94//61egB0dkz6Qs7kFTsIr89hBD3DHe4/6/e5fgGl+JHYxpG8c6qZnUihGrJoW3yUIm1C9olg0BZSFqZ0UQuUCRBagkFcLkUBCQ+hWW/h7WGn3KlXusuPN0qbpPYO3wpm2iYdmbe4JYG+v3al3m/3B6rIyj/TbYgvV6CMKfcbaj5fKVEpvyNvpniCFUvqyK6ldwO8sckcsm/5N0MOGhylyuZVEQrOsalyEDwvsiTLJDl3RdQPdoryt8KyKrK4zodXVfkYz9OMPXakqJ8aavcFzyIhPMlD9XQwd1VdXhWuLOfd9gT0ZugzpAd4CNiv8UeDfa/GhRpjaHahivA73JFE+69R7Z8p0sl7K+ZQz4D8tLYXiihJGGEBbCXsRd1kwTO1q2Hkvw9SuwO+ITrPWLBQ4l+IxWOGCWMK7vdqYkZeFLeS01fts8OcvftJ9Om/kq42z0ut2V7ggxhqm0in3FAretAVLtzve206GUO/4BtdmjWuNmSpWjlCjR4oySy3TAhZ+ReFa1/d+XkuWmomddNJdBFxfrAy1wJMicruqPgq7/qZFZKGqng/MZ5QwVYwKGapnfCthmyqPGezD0a2ZJ+SzxRqnGhg1s/Xmk3s2jJ/QfznCpQxLhIjwdbX6ooR0s82bt0Toht0LU8PhdThNmpfrEA6QQqrepZAWy1Oo+/FA3xZkg4XnBX3e6fTXjEXpXTJACV2rmpxw1i5E9PPAR3dlbADPonKPjMvfGyzA/ntit38vYHL2WEFninKUCu+jcElauijdpTD1D/wDfz/8LwKugpwQaKz/AAAAAElFTkSuQmCC"></img>
        <span>NFT's</span>
    <button/>
  </NavLink>
<div class="dropdown">

  <button class="dropbtn">
  <svg viewBox="-30 -50 600 600" ><path  d="M250.5 5.3 128 62.9c-93.5 44-120.2 57-122.7 59.6a18 18 0 0 0-4.7 14.8c.9 4.5 7.2 20.7 9 23.5 2.4 3.6 7.4 6.2 12.3 6.2 5.2 0-6.3 5.2 127.6-58C205.6 82.4 252.6 60.3 254 59.8c2.2-.9 17.2 6 116 52.7 120.6 57.1 119.8 56.7 126.6 53.2 4.6-2.4 6.2-4.7 10.3-15.3 4.9-12.7 5.5-15.3 4.1-20.4-2.3-8.5-1.9-8.3-85-47.3L304.8 25.6a727.7 727.7 0 0 0-47.5-21.1 15 15 0 0 0-6.8.8z"></path><path d="m160.5 132-95 31.8h381l-94-31.4-95.5-31.8c-.8-.2-44.2 13.9-96.5 31.4zM64.5 185.2c1.4 11.4 4.9 18 11.5 21.7l4 2.2v189.1l2.9 2.9 2.9 2.9h52.4l2.9-2.9 2.9-2.9V209.1l4-2.2c6.6-3.7 10.1-10.3 11.5-21.7l.7-5.2H63.8l.7 5.2zM208.5 185.6c1.4 11.1 4.9 17.6 11.6 21.3l3.9 2.2v189.1l2.9 2.9 2.9 2.9h52.4l2.9-2.9 2.9-2.9V209.1l4-2.2c6.6-3.7 10.1-10.3 11.5-21.7l.7-5.2h-96.4l.7 5.6zM352.5 185.6c1.4 11.1 4.9 17.6 11.6 21.3l3.9 2.2v189.1l2.9 2.9 2.9 2.9h52.4l2.9-2.9 2.9-2.9V209.1l4-2.2c6.6-3.7 10.1-10.3 11.5-21.7l.7-5.2h-96.4l.7 5.6zM50.9 422.9c-2.8 2.9-2.9 3.2-2.9 13.1 0 9.9.1 10.2 2.9 13.1l2.9 2.9h404.4l2.9-2.9c2.8-2.9 2.9-3.2 2.9-13.1 0-9.9-.1-10.2-2.9-13.1l-2.9-2.9H53.8l-2.9 2.9zM2.9 470.9C.1 473.8 0 474.1 0 484c0 9.9.1 10.2 2.9 13.1l2.9 2.9h500.4l2.9-2.9c2.8-2.9 2.9-3.2 2.9-13.1 0-9.9-.1-10.2-2.9-13.1l-2.9-2.9H5.8l-2.9 2.9z"></path></svg>
    
  <span>Chain</span></button>
  <div class="dropdown-content">
    <a href="#"> 
    
    <svg viewBox="0 0 126.61 126.61" xmlns="http://www.w3.org/2000/svg"><g fill="#f3ba2f"><path d="m38.73 53.2 24.59-24.58 24.6 24.6 14.3-14.31-38.9-38.91-38.9 38.9z"/><path d="m0 63.31 14.3-14.31 14.31 14.31-14.31 14.3z"/><path d="m38.73 73.41 24.59 24.59 24.6-24.6 14.31 14.29-38.9 38.91-38.91-38.88z"/><path d="m98 63.31 14.3-14.31 14.31 14.3-14.31 14.32z"/><path d="m77.83 63.3-14.51-14.52-10.73 10.73-1.24 1.23-2.54 2.54 14.51 14.5 14.51-14.47z"/></g></svg>BSC</a>
    
    
    <a href="#">
    <svg version="1.1" id="Layer_1" x="0px" y="0px"
	 viewBox="0 0 38.4 33.5" style={{enableBackground: "new 0 0 38.4 33.5"}} >

<g>
	<path class="st0" d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
		c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
		c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
		c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
		L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
		c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"/>
</g>
</svg>

      Polygon</a>
    <a href="#">
      
      
    <svg version="1.1" id="Layer_1" x="0px" y="0px">
	 viewBox="0 0 38.4 33.5" style="enable-background:new 0 0 38.4 33.5;">
<g>
	<path class="st0" d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3
		c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7
		c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
		c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1
		L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7
		c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z"/>
</g>
</svg>
      
      
      
      Fantom</a>
  </div>
</div>
        <button className="connectBTN" style={{paddingLeft:"10px"}}>
        {/* <div class="ring-container">
              <div class="ringring"></div>
              <div class="circle"></div>
          </div> */}
          <div className="text-nowrap d-none nav-item d-sm-none d-sm-block">
            
          
            
            <small style={{ color: "var(--mainBlack)", fontSize:"16px" }}>
              Please Connect your Wallet
            </small>
          </div>
        </button>
      </nav>
    );
  }
}

export default Navbar;
