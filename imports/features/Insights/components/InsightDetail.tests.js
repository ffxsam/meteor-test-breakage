// FIXME: broken for now
// https://github.com/meteor/meteor/issues/7153

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import InsightDetail from './InsightDetail';

describe('<InsightDetail />', function () {
  if (Meteor.isServer) return;

  it('test not working :(', function () {

  });
});
