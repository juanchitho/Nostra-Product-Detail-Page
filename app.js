function selectSize(button) {
    // Remove the "selected" class from all buttons
    var buttons = document.getElementsByClassName("size-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected");
    }
  
    // Add the "selected" class to the clicked button
    button.classList.add("selected");
  }
var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
} 


$(document).ready(function() {
    var counterValue = 1;

    $('.minus-btn').click(function() {
      if (counterValue > 1) {
        counterValue--;
        $('.counter-value').text(counterValue);
      }
    });

    $('.plus-btn').click(function() {
      counterValue++;
      $('.counter-value').text(counterValue);
    });
  });


/*
$(document).ready(function() {
  $('.next-btn').click(function() {
    $('.cardProduct').animate({ scrollLeft: '+=200' }, 'slow');
  });

  $('.prev-btn').click(function() {
    $('.cardProduct').animate({ scrollLeft: '-=200' }, 'slow');
  });
});

*/

$(document).ready(function() {
  var cardContainer = $('.divProducts');
  var cardWidth = $('.cardProduct').outerWidth(true);
  var cardsToShow = 2;
  var scrollAmount = cardWidth * cardsToShow;

    // Adjust card visibility on window resize
    $(window).on('resize', function() {
    if ($(window).width() < 780) {
        cardsToShow = 2;
        scrollAmount = cardWidth * cardsToShow;
    } else {
        cardsToShow = 4;
        scrollAmount = cardWidth * cardsToShow;
        cardContainer.css('transform', '');
    }
    }).resize();

    $('.next-btn').click(function() {
    cardContainer.animate({ scrollLeft: '+=' + scrollAmount }, 'slow');
    });

    $('.prev-btn').click(function() {
    cardContainer.animate({ scrollLeft: '-=' + scrollAmount }, 'slow');
    });
});