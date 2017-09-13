$(document).ready(function(){

    var gallery = $('.gallery');
    var galleryThumbnails = $('.gallery__thumbnails');

    galleryThumbnails.on('click', function (event) {
        var target = $(event.target);

        if (target.hasClass('gallery__image')) {
            var imageSrc = target.attr('src');
            var galleryPreview = $(this).parent(gallery).find($('.gallery__preview'));

            galleryPreview.find('img').attr('src', imageSrc);
        }
    });

});