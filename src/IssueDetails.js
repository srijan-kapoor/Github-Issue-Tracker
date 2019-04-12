import React from 'react';
import uuid from './uuid';

class IssueDetails extends React.Component {	
	render (){
		return (
			console.log(this.props);
			// const { data } = this.props;
			<React.Fragment>
				{
				// 	return(
						<div className="issue" key={uuid()}>
							<div>
								<h2 className="issue-title">{"v.title"}</h2>
								<p className="issue-details">{"v.body"}</p>
							</div>
							<div className="issue-title-div">
								<img src={"v.user.avatar_url"} alt="avatar_img"/>
								<p className="user-name">{"v.user.login"}</p>
							</div>
						</div>
				// )})}
			}
			</React.Fragment>
		)
	}
}

export default IssueDetails;
