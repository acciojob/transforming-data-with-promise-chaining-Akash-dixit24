//your JS code here. If required.
const btn = document.getElementById("btn");
const ip = document.getElementById("ip");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const num = Number(ip.value);

    output.textContent = "";

    new Promise((resolve) => {
        setTimeout(() => {
            output.textContent = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = value * 2;
                output.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = value - 3;
                output.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = value / 2;
                output.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = value + 10;
                output.textContent = `Final Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    });
});