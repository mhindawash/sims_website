import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyComponent: React.FC = () => {
	return (
		<div>
			<InlineWidget
			url="https://calendly.com/mo3greentv"
			styles={{ height: '630px' }}
			pageSettings={{
				backgroundColor: 'ffffff',
				hideEventTypeDetails: false,
				hideLandingPageDetails: false,
				primaryColor: '00a2ff',
				textColor: '4d5055'
			}}
			prefill={{
				email: 'text@test.com',
				firstName: 'First Name',
				lastName: 'Last Name',
				name: 'First Last Name',
				customAnswers: {
					a1: 'a1',
					a2: 'a2',
					a3: 'a3',
					a4: 'a4',
					a5: 'a5',
					a6: 'a6',
					a7: 'a7',
					a8: 'a8',
					a9: 'a9',
					a10: 'a10',
				},
				date: new Date(Date.now() + 86400000)
			}}
			utm={{
				utmCampaign: 'Spring Sale 2019',
				utmContent: 'Shoe and Shirts',
				utmMedium: 'Ad',
				utmSource: 'Facebook',
				utmTerm: 'Spring'
			}}
			/>
		</div>
	);
};

export default CalendlyComponent;
