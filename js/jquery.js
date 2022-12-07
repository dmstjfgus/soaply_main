// $(document).ready(function () {
//   // do something...
//   // not recommended...
// });

$(function () {
  //   // masonry Effect
  //   $(".grid").masonry({
  //     // options
  //     itemSelector: ".grid-item",
  //     // columnWidth: 200,
  //   });

  const gridBox = $(".grid");
  //   console.log(gridBox);

  const getGalleryData = (data) => {
    // console.log(data);
    let items = [];
    $.each(data, function (i, item) {
      // console.log(i);
      // console.log(item);

      const galleryItems = `
        <div class="grid-item"><img src="/main_project/images/${item.datamain}" alt=""></div>
        `;
      items.push($(galleryItems).get(0));

      // gridBox.innerHTML += galleryItems;
    });
    $(".grid").append(items);
    $(".grid").imagesLoaded(function () {
      //   // masonry Effect
      $(".grid").masonry({
        // options
        itemSelector: ".grid-item",
        // columnWidth: 200,
      });
    });
  };

  $.getJSON("/main_project/data/gallery.json", getGalleryData);

  // Navigaion Moving to Target Section
  $(".nav-lists li").on("click", function () {
    const targetIdx = $(this).index();
    const pagePosition = $(".nav-target").eq(targetIdx).offset().top;
    $("html, body").animate({ scrollTop: pagePosition }, 300);
  });
}); //recommended...
