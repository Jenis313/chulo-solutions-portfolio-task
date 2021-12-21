// Progress bar
const skills = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    const sectionPosition = skills.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    if(sectionPosition < screenPosition){
        showProgress()
    }else{
        hideProgress()
    }
})
function showProgress(){
    progressBars.forEach((progressBar) => {
        const value = progressBar.dataset.progress;
        console.log(value)
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    })
}
function hideProgress(){
    progressBars.forEach((progressBar) => {
        progressBar.style.width = 0;
        progressBar.style.opacity = 0;
    })
}

// Hamburger menu
const hamburger = document.querySelector('.fa-bars');
const hideOnMobile = document.querySelector('.hide-on-mobile');
const cancelBtn = document.querySelector('.fa-times');
hamburger.addEventListener('click', () => {
    hideOnMobile.style.display = 'block';
})
cancelBtn.addEventListener('click', () => {
    hideOnMobile.style.display = 'none'
})