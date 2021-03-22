$(function(){
    //
    $("#btn").click(function(){
    // 插入图片到html
    // var node = document.getElementById('table');
    //     domtoimage.toPng(node)
    //               .then(function (dataUrl) {
    //                   var img = new Image();
    //                   img.src = dataUrl;
    //                   document.body.appendChild(img);
    //               });

    // 下载png图片
     // domtoimage.toBlob(document.getElementById('tableId'))
     //    .then(function (blob) {
     //        window.saveAs(blob, 'my-node.png');
     //    });

    // 下载jpeg图片
    domtoimage.toJpeg(document.getElementById('tableId'), { quality: 0.95})
              .then(function (dataUrl) {
                  var link = document.createElement('a');
                  link.download = 'my-image-name.jpeg';
                  link.href = dataUrl;
                  link.click();
              });

    // var node = document.getElementById('table');
    // domtoimage.toPixelData(node)
    //     .then(function (pixels) {
    //         for (var y = 0; y < node.scrollHeight; ++y) {
    //           for (var x = 0; x < node.scrollWidth; ++x) {
    //             pixelAtXYOffset = (4 * y * node.scrollHeight) + (4 * x);
    //             /* pixelAtXY is a Uint8Array[4] containing RGBA values of the pixel at (x, y) in the range 0..255 */
    //             pixelAtXY = pixels.slice(pixelAtXYOffset, pixelAtXYOffset + 4);
    //           }
    //         }
    //     });
});
});
