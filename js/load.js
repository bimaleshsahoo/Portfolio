var imgs = [];
var imgUrls = ["img/about/port0Detail.png","img/about/port1Detail.png","img/about/port2Detail.png","img/about/port3Detail.png","img/about/port4Detail.png","img/about/port5Detail.png","img/about/port6Detail.png"];
for (i=0;i<imgUrls.length;i++) {
    imgs.push(new Image());
    imgs[i].src = imgUrls[i]
}