const btnAdd = document.querySelector('.add');
const taskInput = document.querySelector('.newTask input');
const tasks = document.querySelector('.tasks');

btnAdd.addEventListener('click', () => {
    if (taskInput.lenght == 0) {
        alert('input pust');
    } else {
        tasks.innerHTML = `
			<div class="task">
				<span class="taskName">
					${taskInput.value}
				</span>
				<button class="del">
					<i class="fas fa-trash"></i>
				</button>
			</div>
		`;

        const currentTask = document.querySelectorAll('.del');
        currentTask.forEach((el) => {
            el.addEventListener('click', () => {
                el.parentNode.remove();
            });
        });

        const task = document.querySelectorAll('.task');
        task.forEach((el) => {
            el.addEventListener('click', () => {
                el.classList.toggle('completed');
            });
        });
    }
});
