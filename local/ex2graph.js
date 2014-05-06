$(document).ready(function() {
  'use strict';

  var graphelements = {
    nodes: [
    { data: { id: 'n1', name: 'ANK3' } },
    { data: { id: 'n2', name: 'SCN2A' } },
    { data: { id: 'n3', name: 'FADD' } },
    { data: { id: 'n4', name: 'FAS' }  },
    { data: { id: 'n5', name: 'SCNN1B' } },
    { data: { id: 'n6', name: 'CNTN1' } },
    { data: { id: 'n7', name: 'SCN1B' } },
    { data: { id: 'n8', name: 'KCNC1' } },
    { data: { id: 'n9', name: 'KCNC2' } },
    { data: { id: 'n10', name: 'CRKL' } },
    { data: { id: 'n11', name: 'PIK3R1' }},
    { data: { id: 'n12', name: 'HOOK1' } },
    { data: { id: 'n13', name: 'SMAD2' } },
    { data: { id: 'n14', name: 'SMAD3' } },
    { data: { id: 'n15', name: 'SPTBN4' } },
    { data: { id: 'n16', name: 'RYR2' } },
    { data: { id: 'n17', name: 'SRI' }},
    { data: { id: 'n18', name: 'PPM1A' }},
    { data: { id: 'n19', name: 'PCBD1' }},
    { data: { id: 'n20', name: 'CABP1' }},
    { data: { id: 'n21', name: 'RIMS1' }},
    { data: { id: 'n22', name: 'CACNB3' }},
    { data: { id: 'n23', name: 'CACNA2D4' }},
    { data: { id: 'n24', name: 'GNB1' }},
    { data: { id: 'n25', name: 'PRKACA' }},
    { data: { id: 'n26', name: 'CACNA1C' }}
    ],
    edges: [
    { data: { id: 'e1', source: 'n1', target: 'n2' } },
    { data: { id: 'e2', source: 'n1', target: 'n3' } },
    { data: { id: 'e3', source: 'n1', target: 'n4' } },
    { data: { id: 'e4', source: 'n1', target: 'n5' } },
    { data: { id: 'e5', source: 'n1', target: 'n6' } },
    { data: { id: 'e6', source: 'n1', target: 'n7' } },
    { data: { id: 'e7', source: 'n1', target: 'n8' } },
    { data: { id: 'e8', source: 'n1', target: 'n9' } },
    { data: { id: 'e9', source: 'n1', target: 'n10' } },
    { data: { id: 'e10', source: 'n1', target: 'n11' } },
    { data: { id: 'e11', source: 'n1', target: 'n12' } },
    { data: { id: 'e12', source: 'n1', target: 'n13' } },
    { data: { id: 'e13', source: 'n1', target: 'n14' } },
    { data: { id: 'e14', source: 'n1', target: 'n15' } },
    { data: { id: 'e15', source: 'n3', target: 'n4' } },
    { data: { id: 'e16', source: 'n5', target: 'n6' } },
    { data: { id: 'e17', source: 'n6', target: 'n7' } },
    { data: { id: 'e18', source: 'n10', target: 'n11' } },
    { data: { id: 'e19', source: 'n13', target: 'n14' } },
    { data: { id: 'e20', source: 'n13', target: 'n16' }},
    { data: { id: 'e21', source: 'n11', target: 'n18' }},
    { data: { id: 'e22', source: 'n16', target: 'n25' }},
    { data: { id: 'e23', source: 'n16', target: 'n17' }},
    { data: { id: 'e24', source: 'n22', target: 'n23' }},
    { data: { id: 'e25', source: 'n26', target: 'n16' }},
    { data: { id: 'e26', source: 'n26', target: 'n17' }},
    { data: { id: 'e27', source: 'n26', target: 'n18' }},
    { data: { id: 'e28', source: 'n26', target: 'n19' }},
    { data: { id: 'e29', source: 'n26', target: 'n20' }},
    { data: { id: 'e30', source: 'n26', target: 'n21' }},
    { data: { id: 'e31', source: 'n26', target: 'n22' }},
    { data: { id: 'e32', source: 'n26', target: 'n23' }},
    { data: { id: 'e33', source: 'n26', target: 'n24' }},
    { data: { id: 'e34', source: 'n26', target: 'n25' }}
    ]
  };


  var nodestyle = {
    'min-zoomed-font-size': '9pt',
    'color': 'black',
    'background-color' : 'data(color)',
    'width': 'mapData(degree,0,5,30,80)',
    'height': 'mapData(degree,0,5,30,80)'
  };

  var edgestyle = {};

  var stylesheet = cytoscape.stylesheet().
                      selector("node").css(nodestyle).
                      selector("edge").css(edgestyle);

  var cy = cytoscape({
    container: document.getElementById('cy'),
    style: stylesheet,
    ready: function() {}
  });

  cy.edges().unselectify();

  cy.on('mouseover','node',function(evt) {
    var node = evt.cyTarget;
    node.css('content','data(name)');
  });

  cy.on('mouseout','node',function(evt){
    var node = evt.cyTarget;
    node.css('*','');
  });

  cy.load(graphelements);

  var degmap = {};
  var nodes = cy.nodes();
  for (var i = 0; i < nodes.length; i++) {
    degmap[nodes[i].id()] = { degree: nodes[i].degree() };
  }
  cy.batchData(degmap);

  var annotations = {
    'n1' : 'ion channel gating',
    'n2' : 'nerve tissue protein',
    'n3' : 'intercellular signaling',
    'n4' : 'intercellular signaling',
    'n5' : 'ion channel gating',
    'n6' : 'nerve tissue protein',
    'n7' : 'nerve tissue protein',
    'n8' : 'ion channel gating',
    'n9' : 'ion channel gating',
    'n10': 'phosphorylation',
    'n11': 'phosphorylation',
    'n12': 'none',
    'n13': 'phosphorylation',
    'n14': 'phosphorylation',
    'n15': 'nerve tissue protein',
    'n16': 'ion channel gating',
    'n17': 'calcium',
    'n18': 'phosphorylation',
    'n19': 'none',
    'n20': 'calcium',
    'n21': 'nerve tissue protein',
    'n22': 'ion channel gating',
    'n23': 'ion channel gating',
    'n24': 'ion channel gating',
    'n25': 'calcium',
    'n26': 'calcium'
  };

  var annotcolors = {
    'calcium' : '#O5FFEF',
    'intercellular signaling' : '#A912FF',
    'ion channel gating' : '#FF7200',
    'nerve tissue protein' : '#E80514',
    'phosphorylation' : '#0537E8',
    'none' : 'grey'
  };

  var annotmap = {};
  for (var id in annotations) {
    if (annotations.hasOwnProperty(id)) {
      annotmap[id] = { color: annotcolors[annotations[id]] };
      console.log(id+annotcolors[annotations[id]]);
    }
  }
  cy.batchData(annotmap);

  var layoutopts = {
    name: 'breadthfirst',
    roots: ['n1','n26']
  };
  cy.layout(layoutopts);
});
