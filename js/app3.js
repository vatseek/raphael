window.onload = function () {
    var paper = Raphael('paper', "100%", "100%");
    var dashed = {fill: "#666", stroke: "#fff"};

    var rect = paper.circle(400, 400, 100).attr(dashed);
    var selected = false;
    $(document).click(function(e){
        if (selected) {
            selected.unplug();
        }
    });

    rect.click(function(e){
        e.stopPropagation();
        selected = paper.freeTransform(this);
    });
};