import * as React from 'react';

interface ICheckboxFieldProps {
	name: string;
	handleChange: (target: any) => void;
}

export const CheckboxField = ({ name, handleChange }: ICheckboxFieldProps) => {

	const handleCheckboxToggle = (e: any) => {
		const target = {
			name,
			value: e.target.checked
		}
		handleChange({ target });
	};

	return (
		<div>
			<label  className="control-label col-sm-3" htmlFor={name} style={{ marginRight: '15px'}}>Background Logo</label>
			<input
				type='checkbox'
				name={name}
				onChange={handleCheckboxToggle}
			/>

		</div>
	);
}