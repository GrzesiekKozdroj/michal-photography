const NavButton = (text) => {
    return (
        <div className="Navbar-button">{text}</div>
    )
}

export default () => {
    return (
        <div className="Navbar">
            <div className="left Menu">
                {NavButton('people')}
                {NavButton('things')}
                {NavButton('kids')}
            </div>
            <div className="Navbar-middle">MB PHOTOGRAPHY</div>
            <div className="right Menu">
                {NavButton('gallery')}
                {NavButton('social')}
                {NavButton('contact')}
            </div>
        </div>
    )
}