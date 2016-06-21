/**
 * Created by Origin on 6/16/16.
 */
$(function () {
    $('#input_text').typeIt({
        speed: 50,
        autoStart: false
    })
        .tiType('Wll')
        .tiPause(500)
        .tiDelete(2)
        .tiType('ell, ')
        .tiPause(1000)
        .tiType('I guess I\'m typing..')
        .tiBreak()
        .tiPause(750)
        .tiType(' but I don\'t really know what to say')
        .tiSettings({speed: 700})
        .tiType('...')
        .tiPause(750)
        .tiSettings({speed: 50})
        .tiDelete()
        .tiType('OK ,  <strong>HELLO WORLD !</strong>');
})