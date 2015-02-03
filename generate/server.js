module.exports = {

  friendlyName: 'Sane backend logic',

  description: 'Handle the addon logic for the sane backend',

  extendedDescription: 'This example machine is part of machinepack-boilerplate, used to introduce everyone to machines.',

  inputs: {

    name: {

      example: 'user',

      description: 'Name of the resource',

      required: true
    },

    attributes: {

      example: 'name:string age:number',

      description: 'extra attributes that will be generated',

      required: false
    }

  },

  defaultExit: 'success',

  exits: {

    error: {
      description: 'An unexpected error occurred.'
    },

    success: {
      example:  {
        numLettersInName: 4,
        secretCode: "e9ec627220bc9e8ca66f916b7fba92f3"
      }
    }
  },

  fn: function (inputs, exits) {

    /**
     * Module Dependencies
     */

    // ...

    // Return an object containing the commands to run by the generator
    return exits.success({
      addNpmPackages:  [
      { name: 'bcrypt', target: '~0.8.1'},
      { name: 'passport', target: '~0.2.1'},
      { name: 'passport-local', target: '~1.0.0'},
      { name: 'express-jwt', target: '~1.0.0'},
      { name: 'jsonwebtoken', target: '~3.2.2'},
      ],
      commands: [
      `sails generate model ${inputs.name} ${inputs.attributes}`,
      `sails generate controller ${inputs.name}`
      ]
    });

  }

};
