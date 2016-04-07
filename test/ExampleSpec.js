import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../src/app.jsx';
import jsdom from 'mocha-jsdom';

describe("true", () => {
  jsdom();

  it("should render div element", () => {
    let renderedComponent = TestUtils.renderIntoDocument(
          <App />
        );

    let AppNode = ReactDOM.findDOMNode(renderedComponent);
    expect(AppNode.tagName).to.eq('DIV');
  });
});
