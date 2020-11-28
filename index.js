const express = require("express");
const app = require("./server");

app.use(express.json());
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/js"));
// app.use(cors());
