   $(function() {
    var params = {
                   type: "GET",
                  url: "http://api.flickr.com/services/feeds/photos_public.gne?id=53805623@N02&format=json&jsoncallback=?&tags=OfficeArt", 
                  dataType:"json", 
                  success: function(response){
                                                html = "";
                                                $.each(response.items, function(i, item){
                                                    html += "<a href =" +item.media.m.slice(0,item.media.m.length - 6)+ ".jpg data-lightbox = officeArt>";
                                                    html += "<img src =" +item.media.m.slice(0,item.media.m.length - 6)+ ".jpg height = 100px>";

                                                });
                                                $("#photoList").html(html);
                                                }};
    $.ajax(params);

    
  });