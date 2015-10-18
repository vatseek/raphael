window.onload = function () {
    var paper = Raphael(0, 0, "100%", "100%");
    var dashed = {fill: "#666", stroke: "#fff"};

    var rect = paper.circle(400, 400, 100).attr(dashed);
    var selectted = false;
    $(document).click(function(e){
        if (selectted) {
            selectted.unplug();
        }
    });

    rect.click(function(e){
        e.stopPropagation();
        selectted = paper.freeTransform(this);
    });
};