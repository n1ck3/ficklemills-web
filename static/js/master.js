$(document).ready(function(){
    $(".distributor").each(function(){
        $(this).qtip({
            'content': {
                'title': $(this).attr("q_title"),
                'text': $(this).attr("q_body")
            },
            'position': {
                'my': 'bottom center',
                'at': 'top center'
            },
            'style': {
                'tip': true,
                'classes': 'qtip-dark qtip-rounded center'
            }
        });
    });
});
