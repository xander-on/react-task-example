import { useContext } from 'react';

import TaskCard from './TaskCard';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
	const { tasks } = useContext(TaskContext);

	if (tasks.length === 0) {
		return (
			<h1 className="text-white text-4xl font-bold text-center">
				No hay tareas pendientes
			</h1>
		);
	}

	return (
		<div className="grid grid-cols-4 gap-4">
			{tasks.map((task, index) => (
				<TaskCard key={index} task={task} />
			))}
		</div>
	);
};

export default TaskList;
