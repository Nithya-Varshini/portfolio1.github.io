import { Outlet, Link } from "react-router-dom";



function Nav(){

    return(
        <>
    <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
           <a class="navbar-brand" href="/"><strong>Nithya Varshini</strong></a>
                <div class="collapse navbar-collapse" id="Navbar">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active" style={{color:"floralwhite"}}><span class="fa fa-home"></span><Link style={{color:"floralwhite"}} to="/">Home</Link></li>
                        <div style={{color:"goldenrod"}}><li>-</li></div>
                        <li class="nav-item" style={{color:"floralwhite"}}><span class="fa fa-info"></span><Link style={{color:"floralwhite"}} to="/">About</Link></li>
                        <div style={{color:"goldenrod"}}><li>-</li></div>
                        <li class="nav-item" style={{color:"floralwhite"}}><span class="fa fa-address-card"></span><Link style={{color:"floralwhite"}} to="/">Contact</Link></li>
                    </ul>
                </div>
        </div>
    </nav>
    <Outlet />
    </>
    );
}

export default Nav;