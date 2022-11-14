$(document).ready(function () { 
    $('.input-task').change(function () { 
        var input = $(this).val();
        $('ul').append(
            '<li>' + input +'<i class="fa-regular fa-circle-xmark"></i><i class="fa-solid fa-square-check"></i>', '</li>'
            )
        $(this).val(' ')
    });

});

$('ul').on('click', '.fa-circle-xmark', function () { 
    $(this).parent('li').fadeOut(200);
});
$('ul').on('click', '.fa-square-check', function () { 
    $(this).parent('li').toggleClass('check');
});
    

