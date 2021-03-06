import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import dateFormat from 'dateformat';

import Footer from 'components/Footer/Footer';
import { Menu, MenuItem } from 'components/Menu/Menu';
import programs from '../../data/programs';
import events from '../../data/events';
import news from '../../data/news';
import { slugifyString } from '../../utils';

require('./program.scss');

const propTypes = {
	match: PropTypes.object.isRequired,
};

const Program = function(props) {
	const { match } = props;
	const { programSlug } = match.params;
	const activeProgram = programs.find((prog) => slugifyString(prog.title) === programSlug);
	const activeNews = news.filter((item) => item.programs.includes(activeProgram.title));
	const activeEvents = events.filter((item) => item.programs.includes(activeProgram.title));

	return (
		<div id="program">
			<Helmet>
				<title>{activeProgram.title} · Programs · Knowledge Futures Group</title>
			</Helmet>
			<section>
				<h2 className="section-title">{activeProgram.title}</h2>
				<div className={`line ${slugifyString(activeProgram.title)}`} />
				<p>{activeProgram.longDescription}</p>
			</section>

			<div className="program-blocks">
				<section>
					{!!activeNews.length && (
						<React.Fragment>
							<h2 className="section-title">Program News</h2>
							<Menu>
								{activeNews
									.sort((foo, bar) => {
										return new Date(foo.date) < new Date(bar.date);
									})
									.map((newsItem) => {
										const { date, title, link } = newsItem;
										return (
											<MenuItem
												key={title}
												link={link}
												content={
													<React.Fragment>
														<span className="title">
															{dateFormat(
																new Date(date),
																'mmm dd, yyyy',
															)}
														</span>
														{title}
													</React.Fragment>
												}
											/>
										);
									})}
							</Menu>
						</React.Fragment>
					)}
				</section>

				<section>
					{!!activeEvents.length && (
						<React.Fragment>
							<h2 className="section-title">Program Events</h2>
							<Menu>
								{activeEvents
									.sort((foo, bar) => {
										return new Date(foo.date) < new Date(bar.date);
									})
									.map((event) => {
										const { date, title, link } = event;
										return (
											<MenuItem
												key={title}
												link={link}
												content={
													<React.Fragment>
														<span className="title">
															{dateFormat(
																new Date(date),
																'mmm dd, yyyy',
															)}
														</span>
														{title}
													</React.Fragment>
												}
											/>
										);
									})}
							</Menu>
						</React.Fragment>
					)}
				</section>
			</div>

			<Footer />
		</div>
	);
};

Program.propTypes = propTypes;
export default Program;
