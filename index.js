const date = [
    { id: 'board-0', title: 'to-do', item: [{ id: 'item-0', title: 'sample' }] },
    { id: 'board-1', title: 'doing' },
    { id: 'board-2', title: 'done' },

];


let taskid = 0;
const kanban = new jKanban({
    element: '#kanban',
    widthBoard: '250px',        // カラムの幅 (responsivePercentageの「true」設定により無視される)
    responsivePercentage: true, // trueを選択時はカラム幅は％で指定され、gutterとwidthBoardの設定は不要
    boards: date,
    itemAddOptions: {
        enabled: true,
        content: 'add',
    },

    click: element => kanban.removeElement(element.dataset.eid),
    buttonClick: (element, id) => addTask(id)
});

function addTask(id) {
    const task = document.createElement('input');

    kanban.addForm(id, task);

    task.focus();

    task.addEventListener('blur', e => {
        kanban.addElement(id, {
            id: `item-${taskid++}`, title: e.target.value,

        });
        task.remove();


    })

}