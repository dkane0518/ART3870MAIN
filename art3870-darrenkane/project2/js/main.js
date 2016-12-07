var animationMethods = {
  slideInFromTheSide: function(callback) {
    return function() {
      if ($(this).hasClass('right')) {
        $(this).animate({"margin-right": '0px'}, 500, callback);
      } else if ($(this).hasClass('left')) {
        $(this).animate({"margin-left": '0px'}, 500, callback);
      }
    }
  },


var MeetingZone = function($element) {
  var $meeting = $element.find("#the-meeting");
  var $text = $element.find("p");
  var that = this;
