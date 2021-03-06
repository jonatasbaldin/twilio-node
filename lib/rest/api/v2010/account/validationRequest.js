'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ValidationRequestList;
var ValidationRequestPage;
var ValidationRequestInstance;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ValidationRequestList
 * @description Initialize the ValidationRequestList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          The unique ID of the Account responsible for this Caller Id.
 */
/* jshint ignore:end */
ValidationRequestList = function ValidationRequestList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function validationRequests
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.ValidationRequestContext}
   */
  /* jshint ignore:end */
  function ValidationRequestListInstance(sid) {
    return ValidationRequestListInstance.get(sid);
  }

  ValidationRequestListInstance._version = version;
  // Path Solution
  ValidationRequestListInstance._solution = {accountSid: accountSid};
  ValidationRequestListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/OutgoingCallerIds.json' // jshint ignore:line
  )(ValidationRequestListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a ValidationRequestInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.ValidationRequestList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.phoneNumber - The phone number to verify.
   * @param {string} [opts.friendlyName] -
   *          A human readable description for the new caller ID with maximum length 64 characters.
   * @param {number} [opts.callDelay] -
   *          The number of seconds, between 0 and 60, to delay before initiating the verification call.
   * @param {string} [opts.extension] -
   *          Digits to dial after connecting the verification call.
   * @param {string} [opts.statusCallback] -
   *          A URL that Twilio will request when the verification call ends to notify your app if the verification process was successful or not.
   * @param {string} [opts.statusCallbackMethod] -
   *          The HTTP method Twilio should use when requesting the above URL.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ValidationRequestInstance
   */
  /* jshint ignore:end */
  ValidationRequestListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.phoneNumber)) {
      throw new Error('Required parameter "opts.phoneNumber" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'CallDelay': _.get(opts, 'callDelay'),
      'Extension': _.get(opts, 'extension'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ValidationRequestInstance(this._version, payload));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  return ValidationRequestListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ValidationRequestPage
 * @augments Page
 * @description Initialize the ValidationRequestPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ValidationRequestPage
 */
/* jshint ignore:end */
ValidationRequestPage = function ValidationRequestPage(version, response,
                                                        solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ValidationRequestPage.prototype, Page.prototype);
ValidationRequestPage.prototype.constructor = ValidationRequestPage;

/* jshint ignore:start */
/**
 * Build an instance of ValidationRequestInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.ValidationRequestPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ValidationRequestInstance
 */
/* jshint ignore:end */
ValidationRequestPage.prototype.getInstance = function getInstance(payload) {
  return new ValidationRequestInstance(this._version, payload, this._solution.accountSid);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ValidationRequestInstance
 * @description Initialize the ValidationRequestContext
 *
 * @property {string} accountSid -
 *          The unique ID of the Account responsible for this Caller Id.
 * @property {string} phoneNumber - The incoming phone number.
 * @property {string} friendlyName -
 *          A human readable descriptive text for this resource, up to 64 characters long.
 * @property {number} validationCode -
 *          The 6 digit validation code that must be entered via the phone to validate this phone number for Caller ID.
 * @property {string} callSid -
 *          The unique id of the Call created for this validation attempt.
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid -
 *          The unique ID of the Account responsible for this Caller Id.
 */
/* jshint ignore:end */
ValidationRequestInstance = function ValidationRequestInstance(version, payload,
    accountSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.validationCode = deserialize.integer(payload.validation_code); // jshint ignore:line
  this.callSid = payload.call_sid; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, };
};

/* jshint ignore:start */
/**
 * Produce a plain JSON object version of the ValidationRequestInstance for serialization.
 * Removes any circular references in the object.
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ValidationRequestInstance
 * @instance
 *
 * @returns Object
 */
/* jshint ignore:end */
ValidationRequestInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

module.exports = {
  ValidationRequestList: ValidationRequestList,
  ValidationRequestPage: ValidationRequestPage,
  ValidationRequestInstance: ValidationRequestInstance
};
