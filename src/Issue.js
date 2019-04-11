import React from 'react';
import uuid from './uuid';

class Issue extends React.Component {	
	render (){
		const { data } = this.props;
		return (
			<React.Fragment>
				{
					(data ? data : []).map(v => {
					return(
						<div className="issue-section" key={uuid()}>
							<div>
								<h2 className="issue-title">{v.title}</h2>
								<div>
									<img src={v.user.avatar_url} alt="avatar_img"/>
									<span>{v.login}</span>
								</div>
							</div>
							<p className="issue-details">{v.body}</p>
						</div>
				)})}
			</React.Fragment>
		)
	}
}

export default Issue;
