const command = document.getElementById("command");


let commands = "";
let history = [];
let history_item = 0;


command.addEventListener("keydown", (event) => {
    const curr_command = command.value;
    const shell = document.getElementById("shell");

    if (event.key == "Enter") {
        shell.innerHTML += `<p>${curr_command}</p>`
        let output;
        try {
            output = eval(commands + `;${curr_command}`);
            commands += `;${curr_command}`
            history.unshift(curr_command);
        }
        catch(err) {
            output = err;
        }
        shell.innerHTML += `<p><b>${output}</b></p>`
        command.value = "";
        history_item = 0;
    }
    else if (history_item < history.length && event.key == "ArrowUp") {
        command.value = history[history_item];
        history_item++;
    }
    else if (history_item > 0 && event.key == "ArrowDown") {
        history_item--;
        command.value = history[history_item];
    }
})
