import * as React from 'react';

interface IInputFieldProps {
	name: string;
	type: 'color' | 'range' | 'text';
	min?: number;
	max?: number;
	step?: number;
	defaultValue?: string | number;
	handleChange: (target: any) => void;
	hideLabel?: boolean;
	value?: string | number;
	placeholder?: string;
}

export const InputField = ({ name, type, handleChange, min, max, step, defaultValue, hideLabel, value, placeholder }: IInputFieldProps) => {
	return (
		<div>
			{hideLabel && <label>{name}</label>}
			<input className="form-control"
				type={type}
				id={name}
				name={name}
				onChange={handleChange}
				min={min}
				max={max}
				step={step || 1}
				defaultValue={defaultValue}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
}