var ui;
(function (ui) {
    ui.$error = function (err) {
        throw new Error(err);
    };
})(ui || (ui = {}));
//# sourceMappingURL=error.js.map