function Nan(){

}

function Nav(){
    return(
    <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
           <a class="navbar-brand" href="/"><strong>Nithya Varshini</strong></a>
                <div class="collapse navbar-collapse" id="Navbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active"><a class="nav-link" href="/"><span class="fa fa-home"></span> Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/" onClick={Nan}><span class="fa fa-info"></span> About</a></li>
                        <li class="nav-item"><a class="nav-link" href="/"><span class="fa fa-address-card"></span> Contact</a></li>
                    </ul>
                </div>
        </div>
    </nav>
    );
}

export default Nav;