function biodataInfo(img, name, ig, linked, telp, email, title) {
    document.querySelector('.contact-img').src = img;
    document.querySelector('.contact-name').innerText = name;
    document.querySelector('.contact-ig').innerText = ig;
    document.querySelector('.contact-linked').innerText = linked;
    document.querySelector('.contact-telp').innerText = telp;
    document.querySelector('.contact-email').innerText = email;
    document.querySelector('#contact-title').innerText = title;
}