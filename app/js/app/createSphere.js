define([ 'three', 'cpkAtoms' ], function( ignore, cpkAtoms ){
  return function( atomObject ){
    // Sphere params
    var sphereGeom = new THREE.SphereGeometry( 2, 32, 16 );

    // Material
    var elementColor = cpkAtoms[ atomObject.element ];
    // console.log( elementColor);
    var material = new THREE.MeshLambertMaterial({ color: elementColor });

    // Sphere
    var sphere = new THREE.Mesh( sphereGeom, material );
    sphere.component_atom_id = atomObject.component_atom_id;
    // so that it allow updates
    // sphere.geometry.dynamic = true;
    sphere.position.set( atomObject.x*10, atomObject.y*10, atomObject.z*10 );

    return sphere;
  };
});