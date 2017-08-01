$(function() {
  $.ajax('https://www.codeschool.com/users/zjc93.json', {
    dataType: 'jsonp',
    success: function(result){
      console.log(result);
      var completedCourses = $.map(result.courses.completed, function(completed, i){
        var courses = $('<div class="course"></div>');
        courses.append($('<h3>' + completed.title + '</h3>'));
        courses.append($('<img src="' + completed.badge + '"></img>'));
        courses.append($('<a href="' + completed.url + '" target="_blank" class="btn btn-primary">See Course</a>'));
        return courses;
      });
      console.log(completedCourses);
      $('#badges').append(completedCourses);
      console.log($('#badges'));

    }
  });
});
