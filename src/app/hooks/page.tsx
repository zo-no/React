/* @ts-nocheck */
'use client';
import { useActionState } from 'react';

export default function Home() {
	const [data, action, isPending] = useActionState(Server, undefined);

	return (
		<div>
			<h1>表单示例</h1>
			<form action={action}>
				<label htmlFor='firstName'>姓名:</label>
				<input
					id='firstName'
					name='firstName'
					defaultValue={data?.fieldData?.firstName}
				/>
				<br />
				<button disabled={isPending}>提交</button>
				<p>{data?.message && `接收到: ${data.message}`}</p>
				<p>{data?.error && `错误: ${data.error}`}</p>
			</form>
		</div>
	);
}

async function Server(previousState: unknown, formData: FormData) {
	console.log('Server');

	const firstName = formData.get('name');
	// 模拟异步操作
	await new Promise(resolve => setTimeout(resolve, 3000));
	if (firstName === '') {
		return {
			error: '姓名不能为空',
		};
	}
	return { message: 'PreviousState: ', fieldData: { firstName } };
}
