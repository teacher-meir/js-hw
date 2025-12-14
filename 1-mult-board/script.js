const size = parseInt(prompt("הקש גודל לוח", 10));

let board = `<table dir="ltr"><tbody>`;
for (let i = 1; i <= size; i++) {
    board += `<tr>`;
    for (let j = 1; j <= size; j++) {
        board += `<td>${i * j}</td>`;
    }
    board += `</tr>`;
}
board += `</tbody></table>`;

document.body.innerHTML += board;