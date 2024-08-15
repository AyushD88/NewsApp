import React from "react";

const Newsitem = (props) => {
  let { title, description, imageurl, author, date, newsurl, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            !imageurl
              ? "data:image/jpeg;base64,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"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "50%", zIndex: "1" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By <strong>{!author ? "Unknown" : author}</strong> on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsurl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
