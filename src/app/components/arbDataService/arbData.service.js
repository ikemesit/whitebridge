(function(){
	'use strict';

	angular
		.module('whitebridge')
		.service('arbData', arbData);




	/** @ngInject */
	function arbData(){
		var facultyMembers = [
		{
			name: 'Olasunkade Azeez',
			qualifications: 'MBA, FITD, FCIPM, SPHR, ACIPD',
			imageUrl: 'assets/images/facilitators/azeez.jpg',
			desc:	'<p>Ola Azeez is a consummate Human Resource generalist and Learning and Development expert. He operates at both practice and regulatory levels. A Fellow of Governing Councils of both Nigerian Institute of Training and Development and Chartered Institute of Personnel Management of Nigeria.</p>' + 
					'<p>He joined CITA Petroleum Group Executive Team – (an IATA Strategic Partner and multiple awards winning enterprise) as General Manager, Human Capital with over 2 decades of value adding business partnering hands-on experience in HRM, General Administration, Sales & Marketing, Supply Chain etc across the sectors of the economy.</p><p>Mr. Azeez is an alumnus of many advanced management development programmes in Nigeria and abroad. He is an internationally certified Trainer in HR, Talent Management, Coaching, Mentoring, Performance Management Systems, Negotiation, Leadership, BPMS. He trained in Ireland, Greece, Romania, Czech Republic and Austria among others.</p>' +
					'<p>He is an accomplished Facilitator, Motivational Speaker, Public Affairs Analyst, certified Coach/Mentor, Columnist and a multiple award winner.</p>'
		},
		{
			name: 'Glory Odujirin',
			qualifications: 'MAP, PRINCE2',
			imageUrl: 'assets/images/avatar.png',//assets/images/facilitators/ola.jpg
			desc: 	'<p>Glory Odujirin is an innovative and experienced development consultant who is passionate about the self-development of individuals for the development of Nigeria.</p>' +
					'<p>Her over 15 years experience participating and leading social planning,  social  policy implementation projects and capacity building initiatives has been in various sectors including Non-Profits, Government and the Private sectors  inthe UK and Nigeria.</p>' +
					'<p>She holds a degree in Chemistry and is a graduate of the Bill Gove Public Speaking Institute, USA.</p>' +
					'<p>Amongst numerous responsibilities to her credit, was her role as an Inter-governmental Relations Consultant to the Nigerian High Commission in the UK. She has consulted for organisations such as AMCON, NIMASA, NDA, Lagos State Government, NigComSat, Protocol School of West Africa and Empowerment Support Initiative (ESI).</p>' +
					'<p>Glory is also a performance coach, people manager, certified facilitator and certified PRINCE 2 Project Manager and MAP Certified.</p>'
		},
		{
			name: 'Olabiran, Olamide O. (Mrs.)',
			qualifications: 'M.Sc, ACIPM, MITD, AAHRL, IICPM',
			imageUrl: 'assets/images/facilitators/olamide.jpg',
			desc: 	'<p>Olamide Olabiran holds a Masters degree in Adult Education from the University of Lagos. Her career in Human Resource Management spans the education, maritime, audit and telecom industries. An accomplished facilitator, she serves on the faculty of Nitad and others.</p>' +
					'<p>She has acquired an extensive background in HR generalist & Specialist matters including experience in employee recruitment and retention, training and performance management, job profile design & evaluation, Payroll Administration, HR records management, HR Projects and organizational change management.</p>' +
					'<p>Her professional membership includes:</p>' +
					'<ul>' +
					'<li>Associate, Chartered Institute of Personnel Management (ACIPM).</li>' +
					'<li>Member, Nigerian Institute of Training and Development (MITD)</li>' +
					'<li>Member, African Associates Human Resources Leaders, Ghana. (AAHRL)</li>' +
					'<li>Associate, International Institute of Chartered Professional Managers (IICPM)</li></ul>'
		},
		{
			name: 'Efita Ephraim',
			qualifications: 'M.Sc, AMT ',
			imageUrl: 'assets/images/facilitators/efita.jpg',
			desc: 	'<p>Efita Ephraim has worked with Centre for Management Development (CMD) for over 15 years. Currently an Assistant Director, South-South Zonal Office of CMD. The highlights of his work experience include; Initiating and Designing new Training Programmes, Coordinating and Facilitating Training Programmes, Writing Training Proposals etc.</p>' +
					'<p>He obtained his  Post Graduate Diploma in Management from the University of Calabar and Master Degree in Public Sector Management(2010) from Ghana Institute for Mgt and Public Administration(GIMPA)</p>' +
					'<p>He is also an Accredited Management Trainer (AMT) who is committed and passionate about imparting professional knowledge in various aspects of management development, skilled in facilitation and communication.</p>'
		},
		{
			name: 'Usen George Enyie',
			qualifications: 'ACIB, ACA, MICS',
			imageUrl: 'assets/images/facilitators/usen.jpg',
			desc: 	'<p>Mr Enyie is a Chartered Accountant, a Chartered Banker and tax consultant of over 12years’ experience. His practical work experience cut across the Banking, Oil and Gas, Maritime & Shipping and the Fast Moving Consumer Goods(FMCG) sectors</p>' + 
					'<p>He has facilitated in Personal Development trainings and financial management trainings. He has worked previously as Business Banking officer at Enterprise Bank and Skye Bank Plc and also worked as an Accountant in the Oil and Gas sector.</p>' + 
					'<p>An experienced and widely travelled Professional. He is an associate member of the Chartered Institute of Bankers of Nigeria (ACIB), an associate member of the Institute of Chartered Accountant of Nigeria (ACA), and a professional member, Institute of Chartered Shipbrokers, London (MICS).</p>' +  
					'<p>Mr Enyie is a motivational speaker and personal development coach and has experience in entrepreneurial development having consulted for Small and Medium Enterprises in different sectors of the economy. He is presently the Group Head, Internal Audit of EFL Group Limited,Uyo.</p>'
		},
		{
			name: 'Ekpa, Godwin Clement',
			qualifications: 'MBA, MCB, CILRM, CIM',
			imageUrl: 'assets/images/facilitators/ekpa.jpg',
			desc: '<p>Mr. Ekpa, Godwin Clement is the Head Business Development and Corporate Services AMML Microfinance Bank Ltd; He holds a Bachelor of Science (BSC.) degree in Accounting from University of Abuja, Masters in Business Administration (MBA) Ahmadu Bello University, Zaria and International Certificate of Enterprise Risk Management (ICERM). He is a Member of several professional institutions: Member Chartered institute of Banker Nigeria (MCB), Member Chartered Institute of Loans Risk Management Nigeria (CILRM) and a student Member Chartered institute of Administration.</p>' +
					'<p>Prior to his appointment as Head Business Development and Corporate Services, he was Head of Credit & Risk AMML Microfinance Bank Ltd, Head Retail Banking Mega Microfinance Bank Ltd, Business Development Manager Interline Shipping and Interlines Travels Ltd, Regional Manager (North) AIMS Asset Management Ltd (stock/portfolio Management Company) and Senior Partner Speech world Int’l.</p>' +
					'<p>Godwin has bias for MFB operations and Risk Management. He’s been involved as consultant in MFB set up and management.</p>'
		}];

		this.getFacultyMem = getFacultyMem;

		function getFacultyMem(){
			return facultyMembers;
		} 
	}
})();