$(document).ready(function(){
    Waves.init();
    Waves.attach('button', ['waves-light', 'waves-float']);
    Waves.attach('.btn', ['waves-light', 'waves-float']);
    Waves.attach(".btn-floating", ["waves-flat"]),
    Waves.attach(".btn-w", ["waves-float"]),
    Waves.attach(".btn-f", ["waves-flat"]),
    Waves.attach(".flat-box", ["waves-block"]),
    Waves.attach(".float-box", ["waves-block", "waves-float"]),
    Waves.attach(".card .card-image img", ["waves-light"]),
    Waves.attach(".light", ["waves-block", "waves-float", "waves-light"]),
    Waves.attach("img.rounded-circle", ["waves-circle"]),
    Waves.attach(".flat-icon", ["waves-circle"]),
    Waves.attach(".float-icon", ["waves-circle", "waves-float"]),
    Waves.attach(".float-icon-light", ["waves-circle", "waves-float", "waves-light"])

  
    $('.timepicker').timepicker({
        default: 'now',
        twelveHour: false, // change to 12 hour AM/PM clock from 24 hour
        donetext: 'OK',
        format: "HH:ii:SS",
        autoclose: false,
        vibrate: true
    });

    $('.datepicker').datepicker({
        format:'dd/mm/yyyy',
        autoClose:true,
    });

    $('.collapsible').collapsible();
    $('.collapsible.expandable').collapsible({
      accordion: false
    });

    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    M.textareaAutoResize($('.autoresize'));
    $('input.NeyllieChCounter, textarea.NeyllieChCounter').characterCounter();

  $('.chips').chips();
  $('.chips-initial').chips({
    data: [{
      tag: 'Neyllie',
    }, {
      tag: 'Bootstrap',
    }, {
      tag: 'Material',
    }],
  });
  $('.chips-placeholder').chips({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
  });
  $('.chips-autocomplete').chips({
    autocompleteOptions: {
      data: {
        'Neyllie': null,
        'Bootstrap': null,
        'Material': null
      },
      limit: Infinity,
      minLength: 1
    }
  });   

});	