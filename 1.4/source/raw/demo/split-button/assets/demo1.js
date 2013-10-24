KISSY.use('split-button', function (S, SplitButton) {
    var $ = S.all;
    $(".ks-split-button").each(function (n) {
        new SplitButton({
            srcNode: n,
            listeners: {
                'click': function (e) {
                    S.log('click: ' + e.target.get('content'));
                }
            }
        }).render();
    });
});