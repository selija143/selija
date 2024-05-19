function showImage(element) {
    var modal = document.querySelector('.modal');
    var enlargedImage = modal.querySelector('.enlarged-image');
    var overlay = document.querySelector('.overlay');
  
    enlargedImage.src = element.src;
    modal.style.display = 'block';
    overlay.style.display = 'block';
  
    overlay.onclick = function() {
      hideImage();
    };
  }
  
  function hideImage() {
    var modal = document.querySelector('.modal');
    var overlay = document.querySelector('.overlay');
  
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
  