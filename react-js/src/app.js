const items = ["go the shop", "buy some clothes", "watch movie"];

const handleAdd = (item) => {
    item.preventDefault();
    const val = item.target.elements.task.value;
    if(val){
        document.querySelector("#a").innerHTML= "";
        items.push(val);
        item.target.elements.task.value="";
        render();
    }
    else{
        document.querySelector("#a").innerHTML= "wrong entry ";
    }
}

const render = () => {
    const todoTemplate = (
        <div>
            <h1> Todo App</h1>
            <form onSubmit = {handleAdd}>
                <input type = "text" name = "task"/>
                <button>Add</button>
            </form>
            <p id ="a"></p>
            <ol>
                {items.map(item => <li key = {item}>{item}</li>)}
            </ol>
        </div>
    );  
    
    const myApp = document.querySelector("#hook");
    ReactDOM.render(todoTemplate, myApp);
}

render();
