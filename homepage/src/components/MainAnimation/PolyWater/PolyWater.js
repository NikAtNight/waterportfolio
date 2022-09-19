import React, {useMemo} from 'react'
import * as THREE from 'three'
import {useFrame} from "react-three-fiber";


class DeformablePlaneGeometry extends THREE.Geometry {
    deformableVertices: THREE.Vector3[][]

    constructor(size: number, vertexDistance: number) {
        super();
        this.initVertices(size,vertexDistance);
        this.initFaces(size);
    }

    initVertices(size,distance) {
        let vertices = new Array(size)
        for (let z = 0; z < size; z++) {
            vertices[z] = new Array(size)
            for (let x = 0; x < size; x++) {
                vertices[z][x] = new THREE.Vector3(x * distance, Math.random(), -z * distance);
            }
        }
        this.deformableVertices = vertices

        let vs = []
        for (let z = 0; z < size - 1; z++) {
            for (let x = 0; x < size - 1; x++) {
                let p0 = vertices[z][x], p1 = vertices[z][x + 1], p2 = vertices[z + 1][x], p3 = vertices[z + 1][x + 1];
                vs.push(p0)
                vs.push(p1)
                vs.push(p2)
                vs.push(p2)
                vs.push(p1)
                vs.push(p3)
            }
        }

        this.vertices = vs
    }


    initFaces(size) {
        let fi = 0
        let faces = []
        for (let z = 0; z < size - 1; z++) {
            for (let x = 0; x < size - 1; x++) {
                faces.push(new THREE.Face3(fi, fi + 1, fi + 2))
                faces.push(new THREE.Face3(fi + 3, fi + 4, fi + 5))
                fi += 6
            }
        }
        this.faces = faces
    }
}

let forceY: number[][]

const PolyWater = () => {
    const geometry = useMemo(() => new DeformablePlaneGeometry(50,1), [])
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    const material = useMemo(() => new THREE.MeshLambertMaterial({color: "#37b4f2"}), [])
    const mesh = useMemo(() => new THREE.Mesh(geometry, material), [geometry,material])

    let vertices = geometry.deformableVertices
    forceY = []
    for (let z = 0; z < vertices.length; z++) {
        forceY[z] = []
        for (let x = 0; x < vertices[0].length; x++) {
            forceY[z][x] = 0
        }
    }

    useFrame(()=>{
        let vertices = geometry.deformableVertices
        let vs = new Array(vertices.length)
        for (let z = 0; z < vertices.length; z++) {
            vs[z] = new Array(vertices[0].length)
            for (let x = 0; x < vertices[0].length; x++) {
                let aroundVertex = []
                for (let dz = -1; dz <= 1; dz++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        let _z = z + dz
                        let _x = x + dx
                        if (_z < 0 || vertices.length <= _z) continue
                        if (_x < 0 || vertices[0].length <= _x) continue
                        if (_z === 0 && _x === 0) continue

                        aroundVertex.push(vertices[_z][_x])
                    }
                }

                let v = vertices[z][x].clone()
                let tv = v.clone()
                for (let av of aroundVertex) {
                    let dv = new THREE.Vector3(av.x - v.x, av.y - v.y, av.z - v.z)
                    if (0 < dv.y) forceY[z][x] += dv.y * 0.002
                }
                forceY[z][x] -= v.y * 0.0038
                forceY[z][x] *= 0.99

                tv.y += forceY[z][x]

                vs[z][x] = tv
            }
        }

        for (let z = 0; z < vertices.length; z++) {
            for (let x = 0; x < vertices[0].length; x++) {
                let v = vs[z][x]
                vertices[z][x].set(v.x, v.y, v.z)
            }
        }

        if (Math.random() < 0.01) {
            wave();
        }

        geometry.verticesNeedUpdate = true
        geometry.computeVertexNormals()
    });

    function wave(){
        let z = Math.floor(Math.random() * geometry.deformableVertices.length)
        let x = Math.floor(Math.random() * geometry.deformableVertices[0].length)
        forceY[z][x] = 0.1 + Math.random()
    }

    document.addEventListener('mousedown', () => {
        wave()
    })

    return (

        <primitive object={mesh}/>
    )
}

export default PolyWater;
