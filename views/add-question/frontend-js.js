$(document).on('change', 'input[type="radio"]', function () {
  $('input[type="radio"]').each(function () {
    $(this).parent().removeClass('selected');
  });
  $(this).parent().addClass('selected');
});

$(document).on('change', 'input[type="checkbox"]', function () {
  $('input[type="checkbox"]').each(function () {
    $(this).parent().removeClass('selected');
  });

  $('input[type="checkbox"]:checked').each(function () {
    $(this).parent().addClass('selected');
  });
});

$(document).on('submit', 'form', function (e) {
  var checked = [];
  $('input[type="radio"]').each(function () {
    if ($(this).is(':checked')) {
      checked.push($(this));
      return;
    }
  });

  if (checked.length === 0) {
    e.preventDefault();
  }
});
