import React, { FC, PropsWithChildren } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface IInputProps {
	inn?: boolean;
	register: UseFormRegister<FieldValues>;
}

const TestInput: FC<PropsWithChildren<IInputProps>> = ({
	children,
	register,
	inn,
}) => {
	return (
		<div>
			<label id='1'>{children}</label>
			<input
				id='1'
				type='text'
				{...(inn
					? {
							...register('inn', {
								required: 'no',
								pattern: {
									value: /^[\d+]{10}$/,
									message: 'Please',
								},
							}),
					  }
					: { ...register('limit') })}
			/>
		</div>
	);
};

export default TestInput;
