console.log('Loaded!');

document.getElementById("navMenu").innerHTML =
  '<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">'+ 
        '<div class="navbar-header">'+ 
              '<a class="navbar-brand" href="/">MychatAPP!</a>'+ 
        '</div>'+ 
        '<div>'+ 
            '<ul class="nav navbar-nav">'+ 
                '<li><a href="/">HOME</a></li>'+ 
                '<li><a href="chat" data-target=".bodyarea">CHAT</a></li>'+ 
                '<li><a href="contact_us">CONTACT ME</a></li>'+
                '<li class="dropdown">'+ 
                    '<a href="#" class="dropdown-toggle" data-toggle="dropdown">'+ 
                    'MEMBERS&#39 AREA <b class="caret"></b>'+
                    '</a>'+ 
                    '<ul class="dropdown-menu">'+ 
                    '<li><a href="members_area">LOGIN</a></li>'+ 
                    '<li><a href="members_area">REISTER</a></li>'+ 
                    '<li class="divider"></li>'+ 
                    '<li><a href="#">Separated link</a></li>'+ 
                    '<li class="divider"></li>'+ 
                    '<li><a href="#">One more separated link</a></li>'+ 
                    '</ul>'+
                '</li>'+ 
                '<form class="navbar-right pull-right navbar-form" role="search">'+
                    '<div class="form-group">'+
                        '<input type="text" class="form-control" placeholder="Search">'+
                    '</div>'+
                    '<button type="submit" class="btn btn-default">Submit</button>'+
                '</form>'+
            '</ul>'+ 
        '</div>'+
    '</nav>'; 
	

$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});

	