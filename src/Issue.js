import React from "react";
import { connect } from "react-redux";

class Issue extends React.Component {
  handleClick = (data) => {
    this.props.dispatch({ type: "TOGGLE", payload: data });
  };

  getDate(string) {
    const array = string.split("T").splice(0, 1);
    return array[0].split("-").reverse().join("-");
  }

  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        {(data ? data : []).map((v, i) => {
          return (
            <a
              className="issue-url"
              href={v.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {v.isClicked ? (
                <div
                  className="detailInfo"
                  onClick={() => this.handleClick(v)}
                  key={i}
                >
                  <h1 style={{ marginBottom: "20px" }}>
                    Created Date: {this.getDate(v.created_at)}
                  </h1>
                  <div className="issueOnClick">
                    <div>
                      <h2 className="issue-title">{v.title}</h2>
                      <p className="issue-details">{v?.body?.slice(0, 500)}</p>
                    </div>
                    <div className="issue-title-div">
                      <img src={v.user.avatar_url} alt="avatar_img" />
                      <p className="user-name">@{v.user.login}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className="issue"
                  onClick={() => this.handleClick(v)}
                >
                  <div>
                    <h2 className="issue-title">{v.title}</h2>
                    <p className="issue-details">{v?.body?.slice(0, 300)}</p>
                  </div>
                  <div className="issue-title-div">
                    <img src={v.user.avatar_url} alt="avatar_img" />
                    <p className="user-name">@{v.user.login}</p>
                  </div>
                </div>
              )}
            </a>
          );
        })}
      </React.Fragment>
    );
  }
}

export default connect()(Issue);
