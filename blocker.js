var lightboxBlockerElements = document.querySelectorAll('[id*="smwoverlay"],[id*="wow-modal-overlay"],[id*="om-lightbox"],[id*="dgd_scrollbox"],[class*="snp-pop-"],[id*="ppsPopupShell"],[id*="ppsPopupBgOverlay"],.yithpopup_overlay,yithpopup_wrapper,#mkt-popup,#pdv4overlay,#pdv4wrap,#pty_pkg');

if (typeof lightboxBlockerElements == 'object') {
  lightboxBlockerElements.forEach(function(lightboxToBlock) {
    lightboxToBlock.style.display = 'none';
    lightboxToBlock.setAttribute('id', 'lb-blocker');
  });
}
