export default function decorate(block){
    console.log(block);

    const rows = ['row1', 'row2'];
    const cols = ['col1', 'col2'];
    for (const rowClass of rows) {
        const row = document.createElement('div');
        row.className = rowClass;
        for (const colClass of cols) {
            const col = document.createElement('div');
            col.className = `${rowClass}-${colClass}`;
            row.appendChild(col);
        }
        block.appendChild(row);
    }
}