let thong_tin_CN = document.getElementById ("thong_tin_CN")
let error = document.getElementById ("error")
let input = document.getElementById ("input")
let C1 = document.getElementById("C1")
let C2 = document.getElementById("C2")
let C3 = document.getElementById("C3")
let D1 = document.getElementById("D1")
let D2 = document.getElementById("D2")
let D3 = document.getElementById("D3")
let C_1 = document.getElementById("C_1")
let C_2 = document.getElementById("C_2")
let C_3 = document.getElementById("C_3")
let D_1 = document.getElementById("D_1")
let D_2 = document.getElementById("D_2") 
let D_3 = document.getElementById("D_3")
let A1 = document.getElementById("A1")
let A2 = document.getElementById("A2")
let A3 = document.getElementById("A3")
let B1 = document.getElementById("B1")
let B2 = document.getElementById("B2")
let B3 = document.getElementById("B3")
let A_1 = document.getElementById("A_1")
let A_2 = document.getElementById("A_2")
let A_3 = document.getElementById("A_3")
let B_1 = document.getElementById("B_1")
let B_2 = document.getElementById("B_2")
let B_3 = document.getElementById("B_3")
let A_content_1 = document.getElementById("A_content_1")
let A_content_2 = document.getElementById("A_content_2")
let A_content_3 = document.getElementById("A_content_3")
let B_content_1 = document.getElementById("B_content_1")
let B_content_2 = document.getElementById("B_content_2")
let B_content_3 = document.getElementById("B_content_3")

/* ----------------------------------------------------------*/

if(A_content_1.style.display='none'){
    C1.style.display="block";
    C_1.style.display="none";
}
else if(A_content_1.style.display='block'){
    C1.style.display="none";
    C_1.style.display="block";
}
/*----*/
if(A_content_2.style.display='none'){
    C2.style.display="block";
    C_2.style.display="none";
}
else if(A_content_2.style.display='block'){
    C2.style.display="none";
    C_2.style.display="block";
}
/*----*/
if(A_content_3.style.display='none'){
    C3.style.display="block";
    C_3.style.display="none";
}
else if(A_content_3.style.display='block'){
    C3.style.display="none";
    C_3.style.display="block";
}
/*----*/
if(B_content_1.style.display='none'){
    D1.style.display="block";
    D_1.style.display="none";
}
else if(B_content_1.style.display='block'){
    D1.style.display="none";
    D_1.style.display="block";
}
/*----*/
if(B_content_2.style.display='none'){
    D2.style.display="block";
    D_2.style.display="none";
}
else if(B_content_2.style.display='block'){
    D2.style.display="none";
    D_2.style.display="block";
}
/*----*/
if(B_content_3.style.display='none'){
    D3.style.display="block";
    D_3.style.display="none";
}
else if(B_content_3.style.display='block'){
    D3.style.display="none";
    D_3.style.display="block";
}
/*----*/
/* ----------------------------------------------------------*/

function show_thong_tin_CN(){
    if(input.value=="trinhfx22803@funix.edu.vn"){
        thong_tin_CN.style.display="inline-block";
        error.innerHTML='';
    }
    else if (input.value==""){
        error.innerHTML='Bạn cần nhập Email';
        input.style.backgroundColor='red';
    }
    else {
        thong_tin_CN.style.display='none'
        error.innerHTML='';
        alert('Email không tồn tại trong hệ thống');
    }
}
/* -------------show_button_TTNN_1----------------*/


function show_button_TTNN_A1(obj){
    A1.style.display='block';
    A_1.style.display='block';
}
function show_button_TTNN_A2(obj){
    A2.style.display='block';
    A_2.style.display='block';
}
function show_button_TTNN_A3(obj){
    A3.style.display='block';
    A_3.style.display='block';
    }
function show_button_TTNN_B1(obj){
    B1.style.display='block';
    B_1.style.display='block';
}
function show_button_TTNN_B2(obj){
    B2.style.display='block';
    B_2.style.display='block';
}
function show_button_TTNN_B3(obj){
    B3.style.display='block';
    B_3.style.display='block';
}
/* -------------hidden_button_TTNN_2---------------*/

function hidden_button_TTNN_A1(obj){
    A1.style.display='none';
    A_1.style.display='none';
}
function hidden_button_TTNN_A2(obj){
    A2.style.display='none';
    A_2.style.display='none';
}
function hidden_button_TTNN_A3(obj){    
    A3.style.display='none';
    A_3.style.display='none';
}
function hidden_button_TTNN_B1(obj){    
    B1.style.display='none';
    B_1.style.display='none';
}
function hidden_button_TTNN_B2(obj){
    B2.style.display='none';
    B_2.style.display='none';
}
function hidden_button_TTNN_B3(obj){    
    B3.style.display='none';
    B_3.style.display='none';
}
 /*---------------show_Content_TTNN_1---------------*/

function show_content_TTNN_A1(){
    A_content_1.style.display='block';
    C1.style.display="none";
    C_1.style.display="block";
}
function show_content_TTNN_A2(){
    A_content_2.style.display='block';
    C2.style.display="none";
    C_2.style.display="block";
}
function show_content_TTNN_A3(){
    A_content_3.style.display='block';
    C3.style.display="none";
    C_3.style.display="block";
}
function show_content_TTNN_B1(){
    B_content_1.style.display='block';
    D1.style.display="none";
    D_1.style.display="block";
}
function show_content_TTNN_B2(){
    B_content_2.style.display='block';
    D2.style.display="none";
    D_2.style.display="block";
}
function show_content_TTNN_B3(){
    B_content_3.style.display='block';
    D3.style.display="none";
    D_3.style.display="block";
}
 /*---------------hidden_Content_TTNN_1---------------*/

function hidden_content_TTNN_A1(){
    A_content_1.style.display='none';
    C1.style.display="block";
    C_1.style.display="none";
}
function hidden_content_TTNN_A2(){
    A_content_2.style.display='none';
    C2.style.display="block";
    C_2.style.display="none";
}
function  hidden_content_TTNN_A3(){
    A_content_3.style.display='none';
    C3.style.display="block";
    C_3.style.display="none";
}
function hidden_content_TTNN_B1(){
    B_content_1.style.display='none';
    D1.style.display="block";
    D_1.style.display="none";
}
function hidden_content_TTNN_B2(){
    B_content_2.style.display='none';
    D2.style.display="block";
    D_2.style.display="none";
}
function hidden_content_TTNN_B3(){
    B_content_3.style.display='none';
    D3.style.display="block";
    D_3.style.display="none";
}
