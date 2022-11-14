

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            {/* <img src="./logo.png" alt="easypark-logo" height={60} width={30} /> */}
            <a class="navbar-brand" href="/">EasyPark</a>
         
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                <a class="nav-link active" href="/">Home
                    <span class="visually-hidden">(current)</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">About</a>
                </li>   
            </ul>
            <div class="d-flex">
                <a href="/login/"><button class="btn btn-secondary my-2 my-sm-0" type="submit">Login</button></a>
                <a href="/signup/"><button class="btn btn-secondary my-2 my-sm-0" type="submit">Register</button></a>
            </div>
            </div>
        </div>
    </nav>
 );
}

export default Navbar;