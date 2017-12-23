var ui;
(function (ui) {
    function joinValues(templates) {
        var first = templates[0];
        var value = first instanceof ui.Watcher ? first.getValue() : first;
        var length = templates.length;
        for (var i = 1; i < length; i++) {
            var item = templates[i];
            if (item instanceof ui.Watcher) {
                item = item.getValue();
            }
            value += item;
        }
        return value;
    }
    /**
     * 绑定工具类，用于执行数据绑定用的方法集。您可以使用此类中定义的方法来配置数据绑定。
     */
    var Binding = /** @class */ (function () {
        function Binding() {
        }
        /**
         * 绑定一个对象的属性值到要监视的对象属性上。
         * @param host 用于承载要监视的属性或属性链的对象。
         * 当 <code>host</code>上<code>chain</code>所对应的值发生改变时，<code>target</code>上的<code>prop</code>属性将被自动更新。
         * @param chain 用于指定要监视的属性链的值。例如，要监视属性 <code>host.a.b.c</code>，需按以下形式调用此方法：<code>bindProperty(host, ["a","b","c"], ...)。</code>
         * @param target 本次绑定要更新的目标对象。
         * @param prop 本次绑定要更新的目标属性名称。
         * @returns 如果已为 chain 参数至少指定了一个属性名称，则返回 Watcher 实例；否则返回 null。
         */
        Binding.bindProperty = function (host, chain, target, prop) {
            var watcher = ui.Watcher.watch(host, chain, null, null);
            if (watcher) {
                var assign = function (value) {
                    target[prop] = value;
                };
                watcher.setHandler(assign, null);
                assign(watcher.getValue());
            }
            return watcher;
        };
        /**
         * 绑定一个回调函数到要监视的对象属性上。当 host上 chain 所对应的值发生改变时，handler 方法将被自动调用。
         * @param host 用于承载要监视的属性或属性链的对象。
         * @param chain 用于指定要监视的属性链的值。例如，要监视属性 host.a.b.c，需按以下形式调用此方法：bindSetter(host, ["a","b","c"], ...)。
         * @param handler 在监视的目标属性链中任何属性的值发生改变时调用的事件处理函数。
         * @param thisObject handler 方法绑定的this对象
         * @returns 如果已为 chain 参数至少指定了一个属性名称，则返回 Watcher 实例；否则返回 null。
         */
        Binding.bindHandler = function (host, chain, handler, thisObject) {
            var watcher = ui.Watcher.watch(host, chain, handler, thisObject);
            if (watcher) {
                handler.call(thisObject, watcher.getValue());
            }
            return watcher;
        };
        Binding.$bindProperties = function (host, templates, chainIndex, target, prop) {
            if (templates.length == 1 && chainIndex.length == 1) {
                return Binding.bindProperty(host, templates[0].split("."), target, prop);
            }
            var assign = function () {
                target[prop] = joinValues(templates);
            };
            var length = chainIndex.length;
            var watcher;
            for (var i = 0; i < length; i++) {
                var index = chainIndex[i];
                var chain = templates[index].split(".");
                watcher = ui.Watcher.watch(host, chain, null, null);
                if (watcher) {
                    templates[index] = watcher;
                    watcher.setHandler(assign, null);
                }
            }
            assign();
            return watcher;
        };
        return Binding;
    }());
    ui.Binding = Binding;
})(ui || (ui = {}));
//# sourceMappingURL=Binding.js.map