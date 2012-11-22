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
    $("#terms").qtip({
        'content': {
            'title': "Terms of service",
            'text': 'By using the Ficklemills.com web site ("Service"), or any services of Ficklemills ("Ficklemills"), you are agreeing to be bound by the following terms and conditions ("Terms of Service"). IF YOU ARE ENTERING INTO THIS AGREEMENT ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND SUCH ENTITY, ITS AFFILIATES AND ALL USERS WHO ACCESS OUR SERVICES THROUGH YOUR ACCOUNT TO THESE TERMS AND CONDITIONS, IN WHICH CASE THE TERMS "YOU" OR "YOUR" SHALL REFER TO SUCH ENTITY, ITS AFFILIATES AND USERS ASSOCIATED WITH IT. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, YOU MUST NOT ACCEPT THIS AGREEMENT AND MAY NOT USE THE SERVICES.<br /><br />Ficklemills reserves the right to update and change the Terms of Service from time to time without notice. Any new features that augment or enhance the current Service, including the release of new tools and resources, shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes.<br /><br />While Ficklemills prohibits such conduct and Content on the Service, you understand and agree that Ficklemills cannot be responsible for the Content posted on the Service and you nonetheless may be exposed to such materials. You agree to use the Service at your own risk.'
        },
        'position': {
            'my': 'bottom center',
            'at': 'top center'
        },
        'style': {
            'tip': true,
            'classes': 'qtip-dark qtip-rounded wide'
        }
    });
});
