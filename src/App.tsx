import React, {useState} from 'react';
import {InputField} from './components/InputField';
import {QRCode} from 'react-qrcode-logo';
import {SelectField} from './components/SelectField';
import {ImageUploadField} from './components/ImageUploadField';
import {CheckboxField} from './components/CheckboxField';
import html2canvas from 'html2canvas';

const App: React.FC = () => {
    const [state, setState] = useState({
        // we init this cause is more practical with TS, but eyeRadius is an optional prop
        eyeradius_0_outer_0: 0, eyeradius_0_outer_1: 0, eyeradius_0_outer_2: 0, eyeradius_0_outer_3: 0,
        eyeradius_0_inner_0: 0, eyeradius_0_inner_1: 0, eyeradius_0_inner_2: 0, eyeradius_0_inner_3: 0,
        eyeradius_1_outer_0: 0, eyeradius_1_outer_1: 0, eyeradius_1_outer_2: 0, eyeradius_1_outer_3: 0,
        eyeradius_1_inner_0: 0, eyeradius_1_inner_1: 0, eyeradius_1_inner_2: 0, eyeradius_1_inner_3: 0,
        eyeradius_2_outer_0: 0, eyeradius_2_outer_1: 0, eyeradius_2_outer_2: 0, eyeradius_2_outer_3: 0,
        eyeradius_2_inner_0: 0, eyeradius_2_inner_1: 0, eyeradius_2_inner_2: 0, eyeradius_2_inner_3: 0
    });

    const handleChange = ({target}: any) => {
        setState(prevState => ({...prevState, [target.name]: target.value}))
    }

    const handleDownload = () => {
        html2canvas(document.querySelector('#react-qrcode-logo') as any)
            .then(function (canvas) {
                const link = document.createElement('a');
                link.download = 'react-qrcode-logo.png';
                link.href = canvas.toDataURL();
                link.click();
            });
    }
    return (
		<div className="center-fluid">
			<div style={{
				width: 400,
				height: 400,
				margin: '0 auto',
				marginBottom: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: '50px',
				backgroundColor: '#707070'
			}}>
				<QRCode {...{
					...state,
					eyeRadius: [ // build eyeRadius manually
						{
							outer: [state.eyeradius_0_outer_0, state.eyeradius_0_outer_1, state.eyeradius_0_outer_2, state.eyeradius_0_outer_3],
							inner: [state.eyeradius_0_inner_0, state.eyeradius_0_inner_1, state.eyeradius_0_inner_2, state.eyeradius_0_inner_3],
						},
						{
							outer: [state.eyeradius_1_outer_0, state.eyeradius_1_outer_1, state.eyeradius_1_outer_2, state.eyeradius_1_outer_3],
							inner: [state.eyeradius_1_inner_0, state.eyeradius_1_inner_1, state.eyeradius_1_inner_2, state.eyeradius_1_inner_3],
						},
						{
							outer: [state.eyeradius_2_outer_0, state.eyeradius_2_outer_1, state.eyeradius_2_outer_2, state.eyeradius_2_outer_3],
							inner: [state.eyeradius_2_inner_0, state.eyeradius_2_inner_1, state.eyeradius_2_inner_2, state.eyeradius_2_inner_3],
						}
					]
				}} />
			</div>
			<div className="form-horizontal">
				<div className="form-group">
					<label className="control-label col-sm-3" htmlFor="content">URL</label>
					<div className="col-sm-6">
					<InputField
						name='value'
						type='text'
						handleChange={handleChange}
						placeholder="Entrez une URL"
					/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-3">Logo</label>
					<div className="col-sm-6">
					<ImageUploadField
						name='logoImage'
						handleChange={handleChange}
					/>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-sm-3" >Style</label>
					<div className="col-sm-6">
					<SelectField
						name='qrStyle'
						options={['squares', 'dots']}
						handleChange={handleChange}
					/>

					</div>

				</div>

				<div className=" col-sm-offset-2 col-sm-8">
				<CheckboxField
					name='removeQrCodeBehindLogo'
					handleChange={handleChange}
				/>
				</div>


				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-8 text-center">
					<button type='button' className="btn btn-default" onClick={handleDownload}
							style={{margin: '20px'}}>Télécharger le QR Code
					</button>
					</div>
				</div>

			</div>
		</div>


    );
}

export default App;
