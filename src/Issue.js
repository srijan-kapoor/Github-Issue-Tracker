import React from 'react';
import uuid from './uuid';

class Issue extends React.Component {
	
	render (){
		const { data } = this.props;
		console.log(data)

		return (
			<React.Fragment>
				{
					(data ? data : []).map(v => {
					return(
						<div className="issue" key={uuid()}>
							<div>
								<h2 className="issue-title">{v.title}</h2>
								<p className="issue-details">{v.body}</p>
							</div>
							<div className="issue-title-div">
								<img src={v.user.avatar_url} alt="avatar_img"/>
								<p className="user-name">{v.user.login}</p>
							</div>
						</div>
				)})}
			</React.Fragment>
		)
	}
}

export default Issue;
