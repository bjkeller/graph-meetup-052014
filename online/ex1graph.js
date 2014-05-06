$(document).ready(function(){
  'use strict';

  var graphelements = {
    nodes: [
      { data: { id: 'n1', name: 'A'}},
      { data: { id: 'n2', name: 'B'}},
      { data: { id: 'n3', name: 'C'}},
      { data: { id: 'n4', name: 'D'}}
    ],
    edges: [
      { data: { id: 'e1', source: 'n1', target: 'n2' }},
      { data: { id: 'e2', source: 'n3', target: 'n2' }},
      { data: { id: 'e3', source: 'n4', target: 'n2' }}
    ]
  };

  var cy = cytoscape({
    container: document.getElementById('cy'),
    ready: function() {}
  });

  cy.load(graphelements);

});
