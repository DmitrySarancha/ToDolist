const btnAdd = document.querySelector('.add');
const taskInput = document.querySelector('.newTask input');
const tasks = document.querySelector('.tasks');

const BOX_SHADOW = '0 15px 30px rgba(0, 0, 0, 0.3)';
const BORDER_RADIUS = '15px';
btnAdd.addEventListener('click', () => {
    if (taskInput.value == '') {
        alert('Введите что нибудь!');
    } else {
        tasks.insertAdjacentHTML(
            'afterbegin',
            `
			<div class="task">
				<span class="taskName">
					${taskInput.value}
				</span>
				<button class="del">
					<i class="fas fa-trash"></i>
				</button>
			</div>
		`
        );

        const task = document.querySelector('.task');
        task.addEventListener('click', () => {
            task.classList.toggle('completed');
        });

        const currentTask = document.querySelector('.del');
        currentTask.addEventListener('click', () => {
            currentTask.parentNode.remove();
        });

        taskInput.value = '';
    }
});
