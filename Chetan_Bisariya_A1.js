var container = $('div.container');

$('input#get').click(function(){
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos',
        dataType: 'json',
        success:function(data){
            $.each(data, function(index, item){
                $.each(item, function(key, value){
                    container.append(key + ':' + value + '</br>');
                });
                container.append('<br></br>');
            });
        }
    });
})

$('input#getImage').click(function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        type: 'GET',
        dataType: 'json', 
        success: function(img) {
            $.each(img,function(i){
                $("#albums").append('<tr><td><h3>'+img[i].albumId+'</h3></td><td width="80%"><h3>'+img[i].title+'</h3></td><td><a href="'+img[i].url+'" target="_blank"><img id="thumb" src="'+img[i].thumbnailUrl+'" /> </a></td></tr>');
            })
        }
    });
})