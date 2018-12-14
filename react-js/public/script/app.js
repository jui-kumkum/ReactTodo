"use strict";

var items = ["go the shop", "buy some clothes", "watch movie"];

var handleAdd = function handleAdd(item) {
    item.preventDefault();
    var val = item.target.elements.task.value;
    if (val) {
        document.querySelector("#a").innerHTML = "";
        items.push(val);
        item.target.elements.task.value = "";
        render();
    } else {
        document.querySelector("#a").innerHTML = "wrong entry ";
    }
};

var render = function render() {
    var todoTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " Todo App"
        ),
        React.createElement(
            "form",
            { onSubmit: handleAdd },
            React.createElement("input", { type: "text", name: "task" }),
            React.createElement(
                "button",
                null,
                "Add"
            )
        ),
        React.createElement("p", { id: "a" }),
        React.createElement(
            "ol",
            null,
            items.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
                    item
                );
            })
        )
    );

    var myApp = document.querySelector("#hook");
    ReactDOM.render(todoTemplate, myApp);
};

render();
