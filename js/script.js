// Copyright (c) 2024 Mr. Adam Batiuk All rights reserved
//
// Created by: Adam Batiuk
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function findAreaOfTriangle() {
  // Define the lengths of the base and hight of a triangle
  const baseOfTriangle = parseInt(
    document.getElementById("base-of-triangle").value
  )
  const hightOfTriangle = parseInt(
    document.getElementById("hight-of-triangle").value
  )
  
  //Calculate the area of the triangle
  const areaOfTriangle = (baseOfTriangle * hightOfTriangle) / 2
  const roundedArea = Math.round(areaOfTriangle * 100) / 100

  document.getElementById("answer").innerHTML =
    "Area is: " + roundedArea + " cm²"
}
