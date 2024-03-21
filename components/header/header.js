const header = document.getElementsByClassName("header");

function importHeader() {

    return header.innerHTML = `
    <div class="header-serparador">
    <div class="header_content">

        <a href="">
            <button class="btn btn__contact">
                Cel - 321 626 0631
            </button>
        </a>
        
        <a href="index.html">
            <img src="./assets/images/logo.png" alt="logo">
        </a>
        <button class="btn btn__reservation">
            Reservaciones
        </button>
    </div>
</div>

<nav class="header-nav">
    <div class="nav-list">
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Sobre nosotros</a>
        <a class="nav-link" href="#">Menú</a>
        <a class="nav-link" href="#">Paginas</a>
    </div>

    <ul class="social-list">
        <li class="social-item">
            <a href="#" class="social-link">
                <ion-icon class ="socials-icons" name="logo-facebook"></ion-icon>
            </a>
        </li>

        <li class="social-item">
            <a href="#" target="_blank" class="social-link">
                <ion-icon class ="socials-icons" name="logo-instagram"></ion-icon>
            </a>
        </li>
    </ul>
</nav> `;

    
    
    
}