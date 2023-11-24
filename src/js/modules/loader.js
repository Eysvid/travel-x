function loader () {
    const loader = document.querySelector('.loader-wrapper');
    window.addEventListener('load' , () => {
        setTimeout(() => {
            loader.classList.add('loader-wrapper--hidden')
        }, 1000);
    })
}

export default loader;