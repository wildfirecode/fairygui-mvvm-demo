var ui;
(function (ui) {
    var key = "__bindables__";
    /**
     * 标记实例的一个属性是可绑定的,此方法通常由 Watcher 类调用。
     * @param instance 要标记的实例
     * @param property 可绑定的属性。
     */
    function registerBindable(instance, property) {
        if (true) {
            if (!instance) {
                ui.$error("instance");
            }
            if (!property) {
                ui.$error("property");
            }
        }
        if (instance.hasOwnProperty(key)) {
            instance[key].push(property);
        }
        else {
            var list = [property];
            if (instance[key]) {
                list = instance[key].concat(list);
            }
            instance[key] = list;
        }
    }
    ui.registerBindable = registerBindable;
})(ui || (ui = {}));
//# sourceMappingURL=registerBindable.js.map