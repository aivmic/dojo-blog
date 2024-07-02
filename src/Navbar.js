const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>The Dojo Blog</h1>
            </div>
            <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/create">New Blog</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;