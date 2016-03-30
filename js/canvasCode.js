/**
 * Created by LiuYi on 16/03/31.
 */


function rectall (id,color,done){
    var stage = new Konva.Stage({
        container:id,
        width:160,
        height:40
    });
    var layer = new Konva.Layer();
    stage.add(layer);
    var blue = new Konva.Rect({
        x:0,
        y:0,
        width:0,
        height:33,
        fill:color,
        shadowBlur: 10,
        shadowOffset: {x : 3, y : 7},
        shadowOpacity: 0.5
    });
    layer.add(blue);
    layer.draw();
    blue.to({
        width: done,
        duration: 5
    });
}
rectall("pic1p","#00b7ef",130);
rectall("pic2p","#ff90b7",120);
rectall("pic3p","#da1d3a",100);
rectall("pic4p","#fff",120);
rectall("pic5p","#52ee4c",80);
rectall("pic6p","#eeee25",100);