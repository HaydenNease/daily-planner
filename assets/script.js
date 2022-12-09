$(document).ready(function () {
  
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

  currHour = dayjs().hour();
  
  var saveBtn = $('.saveBtn');
  
  $(saveBtn).click(function() {
    var text = $(this).siblings('.description').val();
    console.log (text);
    var time = $(this).parent().attr('id');
    console.log (time);
    localStorage.setItem(time, text);
  })
 
  $('.time-block').each(function() {
    var hour = parseInt($(this).attr('id').replace('hour-', ''));
    if (hour < currHour) {
      $(this).addClass('past');
    } else if (hour === currHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
    var text = localStorage.getItem($(this).attr('id'));
    
    $(this).find('.description').val(text);
  });
});