const size = parseInt(prompt("הקש גודל לוח", 10));

let board = `<table dir="ltr"><tbody>`;

// שורת כותרת
board += `<tr><th>&times</th>`;
for (let j = 1; j <= size; j++) {
    board += `<th>${j}</th>`;
}
board += `</tr>`;

for (let i = 1; i <= size; i++) {
    board += `<tr><th>${i}</th>`;
    for (let j = 1; j <= size; j++) {
        const color = ((i + j) % 2 === 0) ? "#cfe2f3" : "#f6b5d8";
        board += `<td style="background-color: ${color}">${i * j}</td>`;
    }
    board += `</tr>`;
}
board += `</tbody></table>`;

document.body.innerHTML += board;