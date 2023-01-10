import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { createTask } = useContext(TaskContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask({
			title,
			description,
		});

		setTitle('');
		setDescription('');
	};

	return (
		<div className="max-w-md mx-auto">
			<form onSubmit={handleSubmit} className="p-10 mb-4 bg-slate-800 rounded-xl">
				<h1 className="text-white text-2xl font-bold mb-3">Crea tu tarea</h1>
				<input
					type="text"
					placeholder="Escribe tu tarea"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					autoFocus
					className="p-3 w-full mb-2"
				/>
				<textarea
					cols="30"
					rows="5"
					placeholder="Descripcion de la tarea"
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					className="p-3 w-full mb-2"
				></textarea>
				<button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
			</form>
		</div>
	);
};

export default TaskForm;
