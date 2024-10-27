'use client';
import { useState, useActionState } from 'react';

export default function Home() {
	const [name, setName] = useState<string>('');
	const [msg, setMsg] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = '接受到' + name;
			setMsg(response);
		} catch (error) {
			console.error('提交失败:', error);
			setMsg('提交失败');
		}
	};

	return (
		<div>
			<h1>表单示例</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>姓名:</label>
					<input
						type='text'
						id='name'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<button type='submit'>提交</button>
			</form>
			<p>接收到: {msg}</p>
		</div>
	);
}
