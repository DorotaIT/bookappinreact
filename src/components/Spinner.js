import React from 'react';

export const Spinner = () => {

  return (
    <div className="input-group-prepend">
      <div className="input-group-text">
        <div className="spinner-border spinner-border-sm text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}
