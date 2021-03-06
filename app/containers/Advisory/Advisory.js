import React from 'react';
import Helmet from 'react-helmet';

require('./advisory.scss');

const Advisory = function() {
	return (
		<div id="advisory">
			<Helmet>
				<title>Advisory Council · Knowledge Futures Group</title>
			</Helmet>
			<h1>Advisory Council</h1>
			<p>
				Thank you for agreeing to join the KFG Advisory Council! In order to develop into a
				more diverse and impactful organization, and to follow through with our mission to
				build public alternatives to private knowledge infrastructure, we will need
				assistance and guidance from the Council and people like yourself.
			</p>
			<p>
				We are building a Council of people with a broad set of skills, experience, and
				perspectives who are committed to working creatively and collegially in furtherance
				of the KFG's mission. We could not be more delighted to have you join us in this
				endeavor, and are grateful for your willingness to contribute your time, expertise,
				and support.
			</p>
			<hr />
			<p>
				We are structuring the Advisory Council to have a <b>single primary focus</b>: the
				KFG Annual Report.
			</p>
			<p>
				The Council will measure its success by its ability to help the organization meet
				the objectives laid out in the previous year’s annual report, and by its ability to
				help craft a compelling and comprehensive Annual Report at the end of the current
				fiscal year (June 30).
			</p>
			<p>
				While we encourage and welcome as much involvement as you’d like, we appreciate the
				value and limit of your time – any or all of the following modes of contribution are
				greatly appreciated!
			</p>
			<ul>
				<li>Provide strategic advice based on the FY20 annual report</li>
				<li>Provide contribution and critique as we draft the FY21 annual report</li>
				<li>Engage in brainstorms & check-ins with members of the KFG team</li>
				<li>Participate in the KFG Advisory Council mailing list</li>
			</ul>
			<h2>Documents</h2>
			<ul>
				<li>
					<a href="/reports/annualReport2020.pdf">FY20 Annual Report PDF</a> (
					<a href="https://notes.knowledgefutures.org/pub/2020report">HTML</a>)
				</li>
				<li>
					<a href="https://docs.google.com/document/d/15aliO1cYfTFoNK6-peacEX9Bg_PtCW5oVpvGPthIV-s/edit?usp=sharing">
						FY21 Objectives
					</a>
				</li>
			</ul>

			<h2>Join</h2>

			<p>
				Participation on the advisory council is expected only for the current fiscal year
				(July 1, 2020 to June 30, 2021), but can be extended for additional years if we both
				find the collaboration fruitful.
			</p>
			<p>
				To formally signal your willingness to participate, please complete and submit the
				following form.
			</p>
			<form name="advisory-council" method="POST" data-netlify="true" netlify-honeypot="city">
				<label htmlFor="name">
					<span className="title">Name</span>
					<input type="text" name="name" required placeholder="Name" />
				</label>
				<label htmlFor="title">
					<span className="title">Title</span> · How we'll introduce you to the team and
					other advisors
					<input type="text" name="title" required placeholder="Title" />
				</label>
				<label htmlFor="email">
					<span className="title">Email</span>
					<input type="email" name="email" required placeholder="Email" />
				</label>
				<label htmlFor="publicName">
					We're proud of who we work with!
					<br />
					Opt-in to have your participation publicly listed (e.g. on website, annual
					report)
					<input type="checkbox" name="publicName" value="true" />
				</label>
				<label className="hp" htmlFor="city">
					City hp field
					<input name="city" />
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Advisory;
