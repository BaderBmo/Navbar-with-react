import React from 'react';
const titles=[
    {id:"Home" ,link:"#", text:"Home",drop:["For entrepreneurs", "For students", "For hobbyists"]},

    {id:"Services" ,link:"#", text:"Services",drop:["For entrepreneurs", "For students", "For hobbyists"]},

    {id:"Contact", link:"#", text:"Contact",drop:["For entrepreneurs", "For students", "For hobbyists"]}]

const Header = () => {
return <div className="header">
    <div className="navbar">
        {titles.map(el =>
            <Menu el={el}/>)}
    </div>
</div>}

const Menu = (props) => <div>
<a id={props.el.id} href={props.el.link}>{props.el.text}{props.el.drop.length !==0 &&
    <div className="drop-down-menu">
        {props.el.drop.map(el =>
        <li  href="#">{el}</li>)}
    </div>}
</a>
</div>
export default Header;