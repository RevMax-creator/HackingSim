document.title = "Hacking Simulator";

function getrandmno() {
    let x = 1 + Math.random() * (7 - 1)
    return x
}

function blink() {
    for (let i = 0; i <= 2; i++) {
        let point = `<span class="dot">.</span>`;
        document.documentElement.children[1].children[0].insertAdjacentHTML('beforeend', point);
    }
    for (let i = 0; i <= 2; i++) {
        const element = document.getElementsByClassName("dot")[i];
        element.style.animationDelay = `${i}s`;
    }
}

async function message() {

    const messages = {
        1: "Initialized Hacking and now breaking in",
        2: "Reading your Files",
        3: "Password files Detected",
        4: "Sending all passwords and personal files to server",
        5: "Cleaning up",
    }

    for (const key in messages) {
        if (Object.prototype.hasOwnProperty.call(messages, key)) {
            let x = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    document.documentElement.children[1].innerHTML = `<span class="message">${messages[key]}</span>`;
                    blink()
                    resolve()
                }, getrandmno() * 1000);
            })
        }
    }
}

async function main() {
    let x = await message()
    return x
}

main()