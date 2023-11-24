function mobileNav() {
	const navBtnOpen = document.querySelector('#modalOpen');
	const navBtnClose = document.querySelector('#modalClose');
	const navOverlay = document.querySelector('#mobileNavOverlay');
	const navMobile = document.querySelector('#mobileNav');

	navOverlay.onclick = toggleBtn;
	navBtnOpen.onclick = toggleBtn;
	navBtnClose.onclick = toggleBtn;
	
	navMobile.onclick = function (event) {
		event.stopPropagation();
	  }

	function toggleBtn() {
		navOverlay.classList.toggle('mobile-nav-overlay--open');
		navMobile.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}
}

export default mobileNav;