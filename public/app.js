const scrollButton = document.getElementById('scrollButton')

scrollButton.onclick = function () {
    topFunction()
}

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        scrollButton.style.display = "block"
    else
        scrollButton.style.display = "none"
}

function topFunction() {
    document.body.scrollTop = 0 //Safari
    document.documentElement.scrollTop = 0 //Other browsers
}
